var http = require('http');
var https = require('https');
var axios = require('axios');
var docparser = require('docparser-node');
var { docParserApiSecret } = require('./secrets');

//create a server object:
http
  .createServer((req, res) => {
    axios.get('https://api.docparser.com/v1/ping', {
        headers: { 'Content-Type': 'application/json' },
        auth: { username: docParserApiSecret }
      })
      .then((response) => {
        res.write(`${response.data.msg}`); // write a response to the client
        res.end(); //end the response
      })
      .catch((err) => {
        res.write(`${new Error(err)}`);
        res.end();
      });
  })
  .listen(8080); //the server object listens on port 8080
