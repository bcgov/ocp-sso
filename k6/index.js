import http from 'k6/http';
import { sleep } from 'k6';

import { sample } from './libs/sample.js';
import { obtainToken } from './libs/auth.js';

/**
 * ENVIRONMENT VARIABLES
 * SSO_BASE_URL: string
 * 
 */
export default function () {
  // run the sample test:
  // sample();

  // run test on token endpoint:
  obtainToken();

  sleep(1);
}
