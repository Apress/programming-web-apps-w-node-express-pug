var http = require("http");
var url = require("url");

function start() {

  console.log("Starting.");

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.write("The first Server"); response.end();
  }

  var port = process.env.port || 1337;
  http.createServer(onRequest).listen(port);
  console.log("Has been started.");

}

exports.start = start;