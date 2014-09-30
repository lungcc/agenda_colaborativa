/**
 * Front Page Controller.
 */
module.exports.controller = function(app) {
   // Front page.
  app.get('/', function(req, res) {
    res.json({message: 'Sua API esta funcionando.'});
  });
}
