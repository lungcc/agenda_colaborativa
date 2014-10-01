/**
 * Front Page Controller.
 */
module.exports.controller = function(router) {
   // Front page.
  router.get('/', function(req, res) {
    res.json({message: 'Sua API esta funcionando.'});
  });
}
