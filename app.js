const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const usersRouter = require('./lib/users/users.router');
const app = express();

// Gzip all responses
app.use(compression());

// Set header with API response time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));

const corsOptions = {
    origin: 'https://info.btcpal.online',
    optionsSuccessStatus: 200
};

app.use('/users', cors(corsOptions), usersRouter);

app.get('/healthCheck', cors(), (req, res) => res.status(200).send('OK'));

module.exports = app;
