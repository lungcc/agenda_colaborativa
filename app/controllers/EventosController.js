var Evento = require('../models/evento.js'),
  ImageField = require('../models/ImageUpload.js');

/**
 * Eventos Controller.
 */
module.exports.controller = function(router) {
  // Selecao de eventos.
  router.get('/api/eventos', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
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

    ImageField.imageUpload(req, 'thumbnail', function(responce) {
      console.log(responce);
    });

    // console.log(req);
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
    // res.json({
    //       message: 'Evento inserido com sucesso!',
    //     });
  });

  // Teste upload de image
  router.post('/imagem/new', function(req, res) {

  });

}
