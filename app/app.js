var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express(),
  router = express.Router(),
  fs = require('fs');

var config = {
  'database' : 'mongodb://localhost/agenda_colaborativa',
};

// Conexão com o mongoDB.
mongoose.connect(config.database, function(err) {
  if (err) {
    console.log('Erro no mongoDB');
  }
});

app.use(bodyParser());
app.set('port', process.env.PORT || 8080);

// Require all routes.
fs.readdirSync('./controllers').forEach(function(file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    route.controller(router);
  }
});

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Servidor rodando na porta 8080');
});

