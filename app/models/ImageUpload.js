fs = require('fs'),

module.exports.imageUpload = function(req, field_name, callback) {
  var tmp_path = req.files[field_name].path;
  var target_path = '../web/files/images/' + req.files.thumbnail.name;

  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
    fs.unlink(tmp_path, function() {
        if (err) throw err;
        console.log('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
    });
  });

  var response = {
    type : field_name,
    name : req.files[field_name].name,
  };

  callback(response);
}
