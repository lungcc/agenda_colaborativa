/**
 * Front Page Controller.
 */
module.exports = function(req, res) {
  console.log(req);
  res.json({message: 'Sua API esta funcionando.'});
}
