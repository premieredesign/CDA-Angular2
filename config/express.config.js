'use strict';

const bodyParser = require('body-parser'),
    logger = require('morgan'),
    busboyBodyParser = require('busboy-body-parser'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    mongoose = require('mongoose'),
    http = require('http'),
    Grid = require('gridfs-stream'),
    fs = require('fs'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session);

module.exports = (app) => {
    app.use(express.static(path.join(__dirname, '../dist')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(logger('dev'));
    //app.use(busboyBodyParser({ limit: '10000mb' }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    let api = require('../server/routes/api');
    app.use('/api', api);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
};