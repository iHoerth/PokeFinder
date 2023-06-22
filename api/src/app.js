const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json()); //
app.use(morgan('dev')); //

app.use(router);

module.exports = app;
