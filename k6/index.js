import http from 'k6/http';
import { sleep } from 'k6';

/**
 * ENVIRONMENT VARIABLES
 * SSO_BASE_URL: string
 * 
 */
export default function () {
  http.get(`${__ENV.SSO_BASE_URL}`);
  sleep(1);
}
