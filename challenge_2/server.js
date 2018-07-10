// install dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// parse body
// to pull all data out of the server
// to load the data into the server
// set server to listen


// // serve static assets
app.use(express.static(path.join(__dirname, 'client')));

// add logging middleware
app.use(function (request, response, next) {
  console.log(request.method, request.path);//, response);
  next();
});

// GET request
app.get('/data', (req, res) => res.send('Hello World!'));

// POST request
app.post('/data', (req, res) => res.send('Hello Mars!'));


app.listen(3001, () => console.log('Example app listening on port 3001!'));