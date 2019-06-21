var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, Worlds.......!');
});
var host = 'localhost';
var port = 3000;
var server = app.listen(3000, function() {
  console.log('Server listening at http://%s:%s', host, port);
});
