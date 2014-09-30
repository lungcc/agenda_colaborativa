var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  app = express();

// Porta da API.
var port = 8080;

// Require all routes.
fs.readdirSync('./routes').forEach(function(file) {
  var controller = file.split('.js');
  require("./routes/" + file)(app, controller[0]);
});

app.listen(port, function() {
  console.log('Servidor rodando na porta 8080');
});

