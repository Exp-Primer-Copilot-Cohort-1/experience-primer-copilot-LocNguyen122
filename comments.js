// Create web server
// Create a route for /comments
// When a GET request is made to /comments, it should respond with an array of comments
// When a POST request is made to /comments, it should add a new comment to the array
// When a PUT request is made to /comments, it should modify one of the comments
// When a DELETE request is made to /comments, it should remove the comment from the list

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(req.body);
});

app.put('/comments/:id', function(req, res) {
  comments[req.params.id] = req.body;
  res.json(req.body);
});

app.delete('/comments/:id', function(req, res) {
  comments.splice(req.params.id, 1);
  res.json(comments);
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');