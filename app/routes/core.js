module.exports = function(app, controller) {
  // Front page.
  app.get('/', function(req, res) {
    // Call controller.
    require('../controller/indexController.js')(req, res);
  });
}
