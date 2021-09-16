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

const realmOrder = [
  '_bceid',
  '_bceidbasic',
  '_bceidbasicbusiness',
  '_bceidbusiness',
  '_github',
  '0jjhl1lc',
  '1gw8g24z',
  '244wvp9w',
  '31bjb2mt',
  '35r1iman',
  '3l5nw6dk',
  '4368t2n5',
  '4piqfpfu',
  '4qjrpzzl',
  '4xj39v93',
  '5k8dbl4h',
  '64ey1gkv',
  '6pawtqei',
  '72x8v9rw',
  '7a2r0q1n',
  '8gyaubgq',
  '8wl6x4cp',
  '98r0z7rz',
  'aaoozhcp',
  'acrfd',
  'b9xip88d',
  'bsloojh0',
  'classy',
  'cp1qly2d',
  'cwhx9e9l',
  'devhub',
  'dfmlcg7z',
  'digitaltrust',
  'eagle',
  'ezb8kej4',
  'fcf0kpqr',
  'ff09qn3f',
  'fygf50pt',
  'fyof530u',
  'g7v0xlf4',
  'gde0rjxl',
  'gsr30myh',
  'gt74120e',
  'gwells',
  'gzyg46lx',
  'hud2v882',
  'ichqx89w',
  'idir',
  'ido-all',
  'ido-idir',
  'iesymdnx',
  'itrjxgs9',
  'j3nwwef1',
  'j94mtfjj',
  'jbd6rnxw',
  'jgwhdzgs',
  'joxo7v8f',
  'jsgbqlip',
  'ju4h4snl',
  'justicehub',
  'jxoe2o46',
  'kmas316h',
  'kq56c126',
  'm6kqkznl',
  'master',
  'mds',
  'mfwxg8g4',
  'ng4ehfvx',
  'olq53fhr',
  'onestopauth',
  'onestopauth-basic',
  'onestopauth-both',
  'onestopauth-business',
  'p2zhow64',
  'phtayzfq',
  'pisrwwhx',
  'q6u2t4v3',
  'qx68oa5c',
  'range',
  'rzh2zkjq',
  'sbc',
  'sbtyffu4',
  'secimg',
  'srmm7sdn',
  'tfrs',
  'tmhl5tvs',
  'tz0e228w',
  'udb1ycga',
  'umafubc9',
  'v0t8loh2',
  'v45fd2kb',
  'v4mbqqas',
  'vehizw2t',
  'vig3jzsu',
  'vtkayq4c',
  'wtzxgrm1',
  'xszntxg1',
  'xtmke7ky',
  'xz0xtue5',
  'yskdol9u',
  'ytaqhqia',
  'zdw7o87p',
];

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
        const sessions = await kcAdminClient.sessions.find({
          realm: realm.realm,
        });
        const totalActive = _.sum(_.map(sessions, 'active').map(Number));

        return { realm, totalActive };
      })
    );

    const sortedRealmsData = _.sortBy(realmsData, (item) => {
      const index = realmOrder.indexOf(item.realm.realm);
      if (index < 0) {
        console.log(
          `new realm found: ${item.realm.realm} (${item.realm.displayName})`
        );
      }

      return index;
    });

    sortedRealmsData.forEach(({ realm, totalActive }) => {
      console.log(totalActive);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
