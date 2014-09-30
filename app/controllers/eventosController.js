/**
 * Eventos Controller.
 */
module.exports = function(req, res) {
  var Evento = require('../models/evento.js');

  switch (req.method) {
    case 'POST' :
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

      break;
    case 'GET' :
      Evento.find({}, function(err, eventos) {
        res.json(eventos);
      });
      break;
    default :
      res.json({
        message: 'Acesso invalido.',
      });
  }

}
