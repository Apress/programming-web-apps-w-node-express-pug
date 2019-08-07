var http = require('http');
var express = require('express');
var path = require('path');

var port = process.env.port || 1337;
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Request with Express on Port 1337.');