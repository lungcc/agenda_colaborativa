var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express();

// Porta da API.
var port = 8080;

// Rotas.
var router = express.Router();

app.use(bodyParser());


// Front page.
router.get('/', function(req, res) {
  res.json({message: 'Sua API esta funcionando.'});
});

app.use('/', router);

app.listen(port, function() {
  console.log('Servidor rodando na porta 8080');
});

