//-------------------------------------------------------------------------
// Copyright © 2019 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//-------------------------------------------------------------------------

import http from 'k6/http';
import { b64encode } from 'k6/encoding';
import { check, group, sleep } from 'k6';

import {
  AUTH_CONFIG,
  SERVICE_ACCOUNT_CLIENT,
} from './shared.js';

function getExpiresTime(seconds) {
  return (Date.now() + seconds * 1000);
}

function authenticateClient (client) {

  const tokenEndpointUrl = AUTH_CONFIG.ssoEndpointUrl + AUTH_CONFIG.tokenEndpoint;

  const encodedCredentials = b64encode(
    `${client.id}:${client.secret}`,
  );

  const params = {
    auth: 'basic',
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
    },
  };

  const requestBody = {
    grant_type: 'client_credentials',
  };

  // make request:
  const res = http.post(tokenEndpointUrl, requestBody, params);

  if (res.status == 200) {
    const resJson = JSON.parse(res.body);
    client.authToken = resJson["access_token"];
    client.refreshToken = resJson["refresh_token"];
    client.expiry = getExpiresTime(resJson["expires_in"]);
  }
  else {
    console.log("Authentication Error for client= " + client.id + ". ResponseCode[" + res.status + "] " + res.error);
    client.authToken = null;
  }

  return res.status;
};


export function apiClient() {
  try {
      // 1. Re-authenticate when needed, refresh 45 seconds before expiry
      if (!SERVICE_ACCOUNT_CLIENT.expiry || (SERVICE_ACCOUNT_CLIENT.expiry < (Date.now() + 45000))) {
        const loginRes = authenticateClient(SERVICE_ACCOUNT_CLIENT);
    
        check(loginRes, {
          'SA Client auth successfully': loginRes === 200
        });
      }
    
      // 2. Create/Delete/Get a client with service account:
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SERVICE_ACCOUNT_CLIENT.authToken}`,
        },
      };
    
      group('Client APIs', () => {
        const clientEndpoint = AUTH_CONFIG.ssoAPI + AUTH_CONFIG.clientEndpoint;
        // client name unique for each iteration
        const clientName = `testClient-${__ITER}-${__VU}`;
        let newId = null;
    
        // 1. Create client
        group('Create clients', () => {
          const requestBody = {
            clientId: clientName,
          };

          const res = http.post(clientEndpoint, JSON.stringify(requestBody), params);

          check(res, {
            'SA Client POST-Create successfully': res.status === 201
          });
        });

        // 2. Get the client
        group('Get clients', () => {
          const res = http.get(clientEndpoint, params);

          // check result:
          if (res.status == 200) {
            const resJson = JSON.parse(res.body);
            const targetClient = resJson.filter(c => c.clientId === clientName);
            if (targetClient.length === 1) {
              newId = targetClient[0].id;
            }
          } else {
            console.log(`No target client found. ResponseCode ${res.status}, ${res.error}`);
          }

          check(newId, {
            'SA Client GET successfully': res.status === 200 && newId
          });
        });

        // 3. Delete the client
        group('Delete clients', () => {
          const res = http.del(`${clientEndpoint}/${newId}`, JSON.stringify({placeholder: 'empty'}), params);
    
          check(res, {
            'SA Client DELETE successfully': res.status === 204
          });
        });
      });
  } catch (err) {
    console.error(err);
  }
}