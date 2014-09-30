var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  bodyParser = require('body-parser'),
  app = express();

// Porta da API.
var port = 8080;

var config = {
  'database' : 'mongodb://localhost/agenda_colaborativa',
};

app.use(bodyParser());


var router = express.Router();

// Conexão com o mongoDB
mongoose.connect(config.database, function(err){
  if(err) {
    console.log('Erro ao conectar no mongodb' + err);
  }
});

// Require all routes.
fs.readdirSync('./routes').forEach(function(file) {
  var controller = file.split('.js');
  require("./routes/" + file)(router, controller[0], config);
});

app.use('/', router);

app.listen(port, function() {
  console.log('Servidor rodando na porta 8080');
});

