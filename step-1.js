var https = require('https');

function getAndPrintHTMLChunks () {

  console.log('I did it!');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // called by https when the request is made.
  var callback = function(response) {
    console.log('In response handler callback!');

    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
    });
  }

  console.log("I'm about to make the request!");

  https.request(requestOptions, callback).end();

  console.log("I've made the request!");

};

getAndPrintHTMLChunks();

