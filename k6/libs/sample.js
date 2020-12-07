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
import { parseHTML } from 'k6/html';
import { sleep } from 'k6';

/**
 * ENVIRONMENT VARIABLES
 * SSO_BASE_URL: string
 * 
 */
export function sample () {
  const res = http.get(`https://developer.gov.bc.ca`);
  const doc = parseHTML(res.body); // equivalent to res.html()
  const button = doc.find('button[data-testid="searchbar-button"]').first();
  // TODO: k6 does not include interactions
  console.log('CLICKING')
  button.click();

  sleep(1);
}
