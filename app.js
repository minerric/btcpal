const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path')
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const usersRouter = require('./lib/users/users.router');
const app = express();

// Gzip all responses
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
// Set header with API response time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/api/users', usersRouter);
// error handler
app.use(function (err, req, res, next) {

    res.send(err)
});


module.exports = app;
