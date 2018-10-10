// @ts-check
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// Azure App Service will set process.env.port for you, but we use 3000 in development.
main();

async function main() {

  const PORT = process.env.PORT || 3001;
  // Create the express routes
  let app = express();
  app.use(express.static('client/build'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
  });
  // Create the HTTP server.
  let server = http.createServer(app);
  server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });
}


