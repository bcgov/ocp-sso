const _ = require('lodash');
const axios = require('axios');
const dotenv = require('dotenv');
const KcAdminClient = require('keycloak-admin').default;

dotenv.config();

const KEYCLOAK_URL = 'https://oidc.gov.bc.ca';
const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID || 'admin-cli';
const KEYCLOAK_CLIENT_SECRET = process.env.KEYCLOAK_CLIENT_SECRET;
const KEYCLOAK_USERNAME = process.env.KEYCLOAK_USERNAME;
const KEYCLOAK_PASSWORD = process.env.KEYCLOAK_PASSWORD;

const kcAdminClient = new KcAdminClient({
  baseUrl: `${KEYCLOAK_URL}/auth`,
  realmName: 'master',
});

async function main() {
  try {
    await kcAdminClient.auth({
      grantType: KEYCLOAK_CLIENT_SECRET ? 'client_credentials' : 'password',
      clientId: KEYCLOAK_CLIENT_ID,
      clientSecret: KEYCLOAK_CLIENT_SECRET,
      username: KEYCLOAK_USERNAME,
      password: KEYCLOAK_PASSWORD,
      totp: '<TOTP>',
    });

    const realms = await kcAdminClient.realms.find({});
    const realmsData = await Promise.all(
      realms.map(async (realm) => {
        const count = await kcAdminClient.users.count({ realm: realm.realm });
        return { realm: realm.realm, displayName: realm.displayName, count };
      })
    );

    console.log(_.orderBy(realmsData, ['count'], ['desc']));
  } catch (err) {
    console.log(err);
  }
}

main();
