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
import { sleep } from 'k6';

import { sample } from './libs/sample.js';
import { obtainToken, refreshToken, invalidateToken } from './libs/auth.js';
import { apiClient } from './libs/api.js';
import { USERS, PER_REALM_CONFIG } from './libs/shared.js';

export default function () {
  // run the sample test:
  // sample();
  const REALM_INDEX = __ITER % 3;
  const USER_INDEX = __VU % 3;
  const conf = PER_REALM_CONFIG(REALM_INDEX);
  const user = USERS[USER_INDEX];

  console.log(`Currently on ${REALM_INDEX} with realm ${conf.realmId}`);
  console.log(`API client is ${conf.apiClient.id} and secret is ${conf.apiClient.secret}`);

  // run test on token endpoint:
  obtainToken(conf, user);
  refreshToken(conf, user);
  // note: to test on multiple sessions, should not invalidate token?
  // invalidateToken(conf, user);
  sleep(1);

  // run test on APIs:
  apiClient(conf);
  sleep(1);

}
