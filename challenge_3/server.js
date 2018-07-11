const path = require('path');
const express = require('express');
const app = express();

// server static assets
app.use(express.static(path.join(__dirname, './public')));

app.post('/account', (req, res) => res.send('Hello, Accounting here!'));
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('VirtualStoreServer listening on port 3000!'));

