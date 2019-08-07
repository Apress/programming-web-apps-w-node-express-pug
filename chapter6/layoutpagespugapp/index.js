var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('content', {
    title: 'Hello Pug!'
  });
});

var server = app.listen(3000, function () {});