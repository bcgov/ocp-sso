const _ = require('lodash');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

const getLogs = async (podName, date) => {
  if (!podName || !date) return console.error('The fields podName and date are required. Please see readme for usage');
  try {
    await exec(`kubectl cp ${podName}:/var/log/eap/${date}.tar.gz ./tmp/${date}.tar.gz`);
    await exec(`tar -xvzf ./tmp/${date}.tar.gz -C ./tmp/extracts`);
  } catch (e) {
    console.error('error fetching logs:', e)
  }
}

const reduceDataFromFiles = async (dirname, transformFileContents) => {
  try {
    const files = await fs.readdir(dirname);
    const contents = await Promise.all(files.map(file => fs.readFile(dirname + file, 'utf-8')));
    return contents.map(transformFileContents)
  } catch (e) {
    console.error('error reading files:', e)
  }
}

const getLoginEvents = (content) => {
  const realmLogins = {};
  const logs = content.split('\n').filter(str => str !== '').map(JSON.parse);
  const loginLogs = logs.filter(log => log.message.includes('type=LOGIN'))
  loginLogs.forEach(log => {
    const realm = log.message.match(/realmId=(.+?),/)[1];
    if (realmLogins[realm]) realmLogins[realm] += 1;
    else realmLogins[realm] = 1;
  });

  return realmLogins;
}

const mergeObjects = (allObjects) => {
  const totals = {};
  allObjects.forEach(object => {
    Object.entries(object).forEach(([key, val]) => {
      if (totals[key]) totals[key] += val;
      else {
        totals[key] = val;
      }
    })
  })
  return totals;
}

const main = async () => {
  const [,,podName, date] = process.argv;
  await getLogs(podName, date);
  const logins = await reduceDataFromFiles('./tmp/extracts/', getLoginEvents);
  const mergedLogins = mergeObjects(logins);
  const total = Object.values(mergedLogins).reduce((a,b) => a+b)
  console.log(`TOTAL LOGINS: ${total}`);
  Object.entries(mergedLogins).forEach(([realm, logins]) => {
    console.log(`Realm: ${realm}, total logins: ${logins}`)
  })
}

main()
