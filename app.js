const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, './client')));

// Define a simple route
// app.get('/', (req, res) => {
//   res.send('../client/index.html');
// });

module.exports = app;
