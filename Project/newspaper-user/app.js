const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use("/static", express.static('./static/'));

app.use(morgan('dev'));

module.exports = app;