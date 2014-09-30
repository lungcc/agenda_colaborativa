
module.exports = function(app, controller, config) {
  // Front page.
  app.get('/', function(req, res) {
    // Call controller.
    require('../controllers/indexController.js')(req, res);
  });


  // Selecao de eventos.
  app.get('/api/eventos', function(req, res) {
    require('../controllers/eventosController.js')(req, res);
  });

  app.post('/api/eventos', function(req, res) {
    require('../controllers/eventosController.js')(req, res);
  });
}
