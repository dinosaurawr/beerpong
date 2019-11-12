require('dotenv').config(); // read .env files
const express = require('express');
const stylus = require('stylus');
const nib = require('nib');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

app.use(stylus.middleware({
  src: path.join(__dirname, 'public', 'styles'),
  compile: compile
}));

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log('listening on %d', port);
});