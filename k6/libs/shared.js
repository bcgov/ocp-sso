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
import { Rate } from 'k6/metrics';

/**
 * ENVIRONMENT VARIABLES
 * @param {String} SSO_BASE_URL sso service base url
 * @param {String} SSO_REALM_X the SSO realm testing against
 * @param {String} SSO_CLIENT the SSO client testing against
 * @param {String} USER_PASSWORD the test user password 
 * @param {String} SSO_SA_CLIENT_PASSWORD_X the SSO API client secret
 */

//  Available test realms:
// TODO: figure a away to avoid individual env var per realm
export const SSO_CONFIG_PER_REALMS = [
  { realmId: __ENV.SSO_REALM_0, apiClientSecret: __ENV.SSO_SA_CLIENT_PASSWORD_0 },
  { realmId: __ENV.SSO_REALM_1, apiClientSecret: __ENV.SSO_SA_CLIENT_PASSWORD_1 },
  { realmId: __ENV.SSO_REALM_2, apiClientSecret: __ENV.SSO_SA_CLIENT_PASSWORD_2 },
];

// Available local keycloak users:
// TODO: get from configmap/secret
export const USERS = [
  { username: "test_00", password: __ENV.USER_PASSWORD || 'test', token: null, refresh: null, expires: null },
  { username: "test_01", password: __ENV.USER_PASSWORD || 'test', token: null, refresh: null, expires: null },
  { username: "test_02", password: __ENV.USER_PASSWORD || 'test', token: null, refresh: null, expires: null },
];

// SSO Environment configs:
export const SSO_CONFIG = {
  url: __ENV.SSO_BASE_URL || 'https://sbox.oidc.gov.bc.ca',
};

// auth setting configs:
export const AUTH_CONFIG = {
  tokenEndpoint: '/protocol/openid-connect/token',
  logoutEndpoint: '/protocol/openid-connect/logout',
  clientEndpoint: '/clients',
  grantType: 'password',
};

export const PER_REALM_CONFIG = (realmIndex = 0) => {
  if (realmIndex >= SSO_CONFIG_PER_REALMS.length) return {};
  const realmId = SSO_CONFIG_PER_REALMS[realmIndex].realmId || 'k6realm0';

  return {
    // sso realm URL:
    ssoAuth: `${SSO_CONFIG.url}/auth/realms/${realmId}`,
    ssoAPI: `${SSO_CONFIG.url}/auth/admin/realms/${realmId}`,
    // realm config:
    realmId: realmId || 'k6realm0',
    // k6 client config:
    clientId: __ENV.SSO_CLIENT || 'k6',
    // API client config:
    apiClient: {
      id: __ENV.SSO_SA_CLIENT_ID|| 'api-test',
      secret: SSO_CONFIG_PER_REALMS[realmIndex].apiClientSecret || '',
      authToken: null,
      refreshToken: null,
      expiry: null,
    },
  }
};

// Metrics setup:
export const RATE = {
  authSuccess: new Rate('authentication_successful'),
  errorRate: new Rate('errors'),
};

// expected token fields:
export const TOKEN_FIELDS = ['access_token', 'refresh_token', 'expires_in'];

// helper functions:
export function getExpiresTime(seconds) {
  return (Date.now() + seconds * 1000);
}
