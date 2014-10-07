var Evento = require('../models/evento.js'),
  ImageField = require('../models/ImageUpload.js');

/**
 * Eventos Controller.
 */
module.exports.controller = function(router) {
  // Selecao de eventos.
  router.get('/api/eventos', function(req, res) {
    Evento.find({}, function(err, eventos) {
      if (err) {
        throw (err);
      }
      res.json(eventos);
    });
  });

  // Adição de eventos.
  router.post('/api/eventos', function(req, res) {
    var evento = new Evento();
    evento.titulo = req.body.titulo;
    evento.body = req.body.body;
    evento.data = req.body.data;

    if (req.files != undefined) {
      ImageField.imageUpload(req, 'thumbnail', function(imagem) {
        evento.img = [imagem];
      });
    }

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
