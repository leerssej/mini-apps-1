// install dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// parse body
// to pull all data out of the server
// to load the data into the server
// set server to listen

let dataCache = [];


// // serve static assets
app.use(express.static(path.join(__dirname, 'client')));

// add logging middleware
app.use(function (request, response, next) {
  console.log(request.method, request.path);//, dataCache);//, response);
  next();
});

const bodyparser = require('body-parser');
app.use(bodyparser.json());

// POST request
// app.post('/data', (req, res) => res.send('Hello Mars!'+ req));
app.post('/data', (req, res) => {
  res.send("Thanks for the Post!")
  // console.log(JSON.stringify(req.body));
  // let sentData = req.body;
  // console.log(sentData);
});

// GET request
app.get('/data', (req, res) => res.send('Hello World!'));

app.listen(3001, () => console.log('Example app listening on port 3001!'));
