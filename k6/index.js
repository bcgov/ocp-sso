import http from 'k6/http';
import { parseHTML } from 'k6/html';
import { sleep } from 'k6';

/**
 * ENVIRONMENT VARIABLES
 * SSO_BASE_URL: string
 * 
 */
export default function () {
  const res = http.get(`https://developer.gov.bc.ca`);
  const doc = parseHTML(res.body); // equivalent to res.html()
  const button = doc.find('button[data-testid="searchbar-button"]').first();
  console.log('CLICKING')
  button.click();

  sleep(1);
}
