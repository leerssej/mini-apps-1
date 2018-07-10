// install dependencies
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// add logging middleware
// parse body
// GET request
// to pull all data out of the server
// POST request
// to load the data into the server
// set server to listen


// // serve static assets
// app.use(express.static(path.join(__dirname, '../client')));

// app.use(function (request, res, next) {
//   console.log(request.method, request.path);
//   next
// })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))