var https = require('https');

function getAndPrintHTML () {


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  var callback = function(response) {
    console.log("response to handler callback");

    response.on("data", function(chunk) {
      var output = {};
      console.log("[-- CHUNK " + chunk.length + " --]");
      console.log(output.push(chunk))
    });
  }

  console.log("about to make request");

  https.request(requestOptions, callback).end();

  console.log("request made");

};

getAndPrintHTML();

