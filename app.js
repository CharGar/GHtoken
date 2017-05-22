
// requires express
var express = require('express');
//requires path
var path = require('path');
//shorthand express varibale
var app = express();
// uses static files
app.use(express.static('public'));
// /* gets all follows the path to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
// Tells the sever to listen for action on port 3004
app.listen(3004, function() {
  console.log('up 3004');
});
