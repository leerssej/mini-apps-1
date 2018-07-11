const path = require('path');
const express = require('express')
const app = express()

// server static assets
app.use(express.static(path.join(__dirname, './public')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

