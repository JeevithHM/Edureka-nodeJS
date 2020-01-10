const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./helpers/database');
db.connect();

const adminRouter = require('./routes/adminRouter');
const newsRouter = require('./routes/newsRouter');

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/news', newsRouter);


module.exports = app;