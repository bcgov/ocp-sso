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
import { obtainToken, refreshToken } from './libs/auth.js';
import { apiClient } from './libs/api.js';
import { USERS } from './libs/shared.js';

export default function () {
  // run the sample test:
  // sample();

  // run test on token endpoint:
  let user = USERS[0];
  obtainToken(user);
  refreshToken(user);

  sleep(1);

  // run test on APIs:
  // TODO: this does not work on ocp pod but works on docker run, need to debug environment difference!
  // apiClient()

  sleep(1);
}
