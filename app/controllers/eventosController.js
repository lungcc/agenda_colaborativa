var Evento = require('../models/evento.js');

/**
 * Eventos Controller.
 */
module.exports.controller = function(app) {
  // Selecao de eventos.
  app.get('/api/eventos', function(req, res) {
    Evento.find({}, function(err, eventos) {
      res.json(eventos);
    });
  });

  // Adição de eventos.
  app.post('/api/eventos', function(req, res) {
    var evento = new Evento();
    evento.titulo = req.body.titulo;
    evento.body = req.body.body;
    evento.data = req.body.data;

    evento.save(function(err) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({
          message: 'Evento inserido com sucesso!',
        });
      }
    });
  });
}
