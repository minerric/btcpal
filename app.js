var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const emailRouter = require('./routes/email');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));

const corsOptions = {
    origin: 'https://info.btcpal.online',
    optionsSuccessStatus: 200
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/emailer', cors(corsOptions), emailRouter);

app.get('/healthCheck', cors(), (req, res) => res.status(200).send('OK'));

module.exports = app;
