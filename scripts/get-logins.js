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
    return contents.map(transformFileContents).reduce((a,b) => a+b)
  } catch (e) {
    console.error('error reading files:', e)
  }
}

const getLoginEvents = (content) => {
  const logs = content.split('\n').filter(str => str !== '').map(JSON.parse);
  return logs.filter(log => log.message.includes('type=LOGIN')).length;
}

const main = async () => {
  const [,,podName, date] = process.argv;
  await getLogs(podName, date);
  const logins = await reduceDataFromFiles('./tmp/extracts/', getLoginEvents);
  console.log(logins);
}

main()