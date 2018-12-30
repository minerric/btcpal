#!/usr/bin/env node

/**
 * Module dependencies.
 */
require('dotenv').load();


var app = require('../app');
const fs = require('fs');
var debug = require('debug')('btcpalbe:server');
var https = require('https');
const mongoConnect = require('../lib/mongo.connect').connect


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.APP_PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
var http = require('http');

const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
    app.emit('ready');
    console.log('listening on port' + bind);
}


// Create a new MongoClient
async function main() {

    const dbName = 'registration';

    const client = await mongoConnect();
    console.log("Connected successfully to server");

    global.db = client.db(dbName);

    console.log('port %' + port);
    server.listen(port, '0.0.0.0');
    server.on('error', onError);
    server.on('listening', onListening);


}

main();

