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
 * @param {String} SSO_REALM the SSO realm testing against
 * @param {String} SSO_CLIENT the SSO client testing against
 * @param {String} USER_PASSWORD the test user password 
 */

// SSO Environment configs:
export const SSO_CONFIG = {
  url: __ENV.SSO_BASE_URL || 'https://sbox.oidc.gov.bc.ca',
  realmId: __ENV.SSO_REALM || 'abcd1234',
  clientId: __ENV.SSO_CLIENT || 'k6',
};

// auth setting configs:
export const AUTH_CONFIG = {
  ssoEndpointUrl: `${SSO_CONFIG.url}/auth/realms/${SSO_CONFIG.realmId}`,
  ssoAPI: `${SSO_CONFIG.url}/auth/admin/realms/${SSO_CONFIG.realmId}`,
  tokenEndpoint: '/protocol/openid-connect/token',
  logoutEndpoint: '/protocol/openid-connect/logout',
  clientEndpoint: '/clients',
  grantType: 'password',
  userPassword: __ENV.USER_PASSWORD || 'test',
};

// service account client for API testing:
export let SERVICE_ACCOUNT_CLIENT = {
  id: __ENV.SSO_SA_CLIENT_ID|| 'api-test',
  secret: __ENV.SSO_SA_CLIENT_PASSWORD || '',
  authToken: null,
  refreshToken: null,
  expiry: null,
};

// Metrics setup:
export const RATE = {
  authSuccess: new Rate('authentication_successful'),
  errorRate: new Rate('errors'),
};

// local keycloak users:
// TODO: get from configmap
export const USERS = [
  { username: "test_00", password: AUTH_CONFIG.userPassword, token: null, refresh: null, expires: null },
  { username: "test_01", password: AUTH_CONFIG.userPassword, token: null, refresh: null, expires: null },
  { username: "test_02", password: AUTH_CONFIG.userPassword, token: null, refresh: null, expires: null },
];

// expected token fields:
export const TOKEN_FIELDS = ['access_token', 'refresh_token', 'expires_in'];

// helper functions:
export function getExpiresTime(seconds) {
  return (Date.now() + seconds * 1000);
}