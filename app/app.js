var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express(),
  fs = require('fs');

var config = {
  'database' : 'mongodb://127.0.0.1/agenda_colaborativa',
};

var router = express.Router();

// Conexão com o mongoDB.
mongoose.connect(config.database, function(err) {
  console.log('Erro no mongoDB');
});
app.use(bodyParser());
// Require all routes.
fs.readdirSync('./controllers').forEach(function(file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    route.controller(app);
  }
});

app.set('port', process.env.PORT || 8080);

app.use('/', router);

app.listen(app.get('port'), function() {
  console.log('Servidor rodando na porta 8080');
});

