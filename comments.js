// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a comments array
var comments = [];

// Load data from file
fs.readFile('data.txt', 'utf8', function(err, data) {
  if (err) throw err;
  comments = JSON.parse(data);
});

// GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Save data to file
function saveToFile() {
  fs.writeFile('data.txt', JSON.stringify(comments), function(err) {
    if (err) throw err;
    console.log('Data is saved!');
  });
}

// Save data to file every 30 seconds
setInterval(saveToFile, 30000);

// Start server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});