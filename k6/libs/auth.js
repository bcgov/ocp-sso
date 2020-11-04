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
import { check, sleep } from 'k6';

import {
  SSO_CONFIG,
  AUTH_CONFIG,
  USERS,
  RATE,
  TOKEN_FIELDS,
} from './shared.js';

export function obtainToken () {
  // setup users and auth details:
  let user = USERS[0];
  let tokenComplete = true;

  const tokenEndpointUrl = AUTH_CONFIG.ssoEndpointUrl + AUTH_CONFIG.tokenEndpoint;

  const authOptions = {
      grant_type: AUTH_CONFIG.grantType,
      client_id: SSO_CONFIG.clientId,
      username: user.username,
      password: user.password,
  };

  // make request:
  const res = http.post(tokenEndpointUrl, authOptions);

  // check result:
  if (res.status == 200) {
      const resJson = JSON.parse(res.body);
      TOKEN_FIELDS.forEach(key => {
        if (!resJson.hasOwnProperty(key)) tokenComplete = false;
      })
      RATE.authSuccess.add(1);
  }
  else {
      console.log(`Authentication Error for user= ${user.username}. ResponseCode ${res.status}, ${res.error}`);
      RATE.errorRate.add(1);
  }

  check(res.status, {
    'Token endpoint successfully': res.status === 200 && tokenComplete,
  });

  sleep(1);
};

export function refreshToken () {};