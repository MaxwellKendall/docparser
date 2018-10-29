var http = require('http');
var https = require('https');
var docparser = require('docparser-node');
var { docParserApiSecret } = require('../secrets');

const options = {
  hostname: "api.docparser.com",
  path: "/v1/ping",
  headers: { "Content-Type": "application/json" },
  auth: `${docParserApiSecret}:`
};

//create a server object:
http
  .createServer((req, res) => {
    https.get(options,
      resp => {
          resp.on('data', (data) => {
            console.log(data);
            res.write(`yooo ${data}`); //write a response to the client
            res.end(); //end the response
          })
      }
    );
  })
  .listen(8080); //the server object listens on port 8080