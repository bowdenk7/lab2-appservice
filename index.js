// @ts-check
const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const util = require('util');
const metaDataFileName = `${__dirname}/metadata.json`;
const promisifiedReadFile = util.promisify(fs.readFile);

// Azure App Service will set process.env.port for you, but we use 3000 in development.
main();

async function main() {

  const PORT = process.env.PORT || 3001;
  let expiryTimestamp;
  if (!process.env['SITE_EXPIRY_UTC'] || !process.env['USER_GUID']) {
    let fileData = (await readMetadataFile());
    process.env['SITE_EXPIRY_UTC'] = fileData ? fileData.expiryTimestamp : "";
    process.env['USER_GUID'] = fileData ? fileData.userGuid : "";
  }
  // Create the express routes
  let app = express();
  app.use(express.static('client/build'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
  app.post('/api', (req, res) => {
    res.type('json');
    const token = req.body.token;
    res.end(JSON.stringify({
      gitUrl: token == process.env['APPSETTING_SITE_SITEKEY'] ? process.env['APPSETTING_SITE_GIT_URL'] : "Incorrect url param",
      bashGitUrl: token == process.env['APPSETTING_SITE_SITEKEY'] ? process.env['APPSETTING_SITE_BASH_GIT_URL'] : "Incorrect url param",
      expiry: process.env['SITE_EXPIRY_UTC'],
      host: process.env['HTTP_HOST']
    }));
  });
  app.get('/:userGuid', async (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
  /**
   * Try app service uses this endpoint to set remaining trial time and set a guid so that only
   * the assigned user can access the git credentials
   */
  app.put('/api/metadata', (req, res) => {
    if (req.body.userGuid == process.env['APPSETTING_SITE_SITEKEY']) {
      if (req.body.timestamp) {
        process.env['SITE_EXPIRY_UTC'] = req.body.timestamp;
      }
      updateMetadataFile(req.body.timestamp, req.body.guid);
      res.end("Successfully updated meta-data");
    }
    else {
      res.send(401);
    }
  });
  // Create the HTTP server.
  let server = http.createServer(app);
  server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });
}

function updateMetadataFile (expiryTimestamp, userGuid) {
  if (fs.existsSync(metaDataFileName)) {
    var file = require(metaDataFileName);
    file.expiryTimestamp = expiryTimestamp;
    file.userGuid = userGuid;
    fs.writeFileSync(metaDataFileName, JSON.stringify(file));
  }
}

async function readMetadataFile () {
  if (fs.existsSync(metaDataFileName)) {
    let content = await promisifiedReadFile(metaDataFileName, 'utf8');
    return JSON.parse(content);
  }
}





