var ldap = require('ldapjs');
var readlineSync = require('readline-sync');
var fs = require('fs');

const USERS_FILE_PATH = './users.json';

/* Prompt user running script for their AD credentials to bind to LDAP */
var userName = readlineSync.question('What is your IDIR username? ');
var password = readlineSync.question('What is your IDIR password? ', {
  hideEchoBack: true
});

/* Read users.json file */
let users = JSON.parse(fs.readFileSync(USERS_FILE_PATH, { encoding: 'utf-8' }, function (err) {
  console.error(err);
  process.exit();
}));
const usersWithoutGuids = users.filter((user) => { return user.idir_user_guid === null });
console.log(`Found ${users.length} users with ${usersWithoutGuids.length} missing guids`);

/* Create LDAP search filter */
var filter = new ldap.OrFilter({
  filters: usersWithoutGuids.map((user) => {
    return new ldap.EqualityFilter({
      attribute: 'samAccountName',
      value: user.idir_username
    });
  })
});

/* Create LDAP client */
var client = ldap.createClient({
  url: 'ldaps://idir.bcgov',
  tlsOptions: { rejectUnauthorized: false }
});

/* Bind to LDAP and run search*/
client.bind(`${userName}@bcgov`, password, function(err) {
  var opts = {
    filter: filter,
    scope: 'sub',
    attributes: ['samAccountName', 'bcgovGUID']
  };
  client.search('DC=idir,DC=BCGOV', opts, function(err, res) {
    res.on('searchEntry', function(entry) {
      users.filter(user => user.idir_username === entry.object.sAMAccountName.toLowerCase())[0].idir_user_guid = entry.object.bcgovGUID;
    });
    client.unbind(function(err) {
      console.log('Unbinding from LDAP client');
      fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 4), (err) => {
        if (err) {
          console.log(err);
        }
      });
      console.log('Saved updated users to users file');
    });
  });
});
