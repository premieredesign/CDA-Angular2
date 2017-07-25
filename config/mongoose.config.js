'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const fs = require('fs');
const app = require('express')();

module.exports = (config) => {
    const dbURL = config.dev.db;








    mongoose.connect(dbURL)
        .then(() => console.log('Connected to Mongo Successfully'))
        .catch((err) => console.error(err));

    mongoose.connection.on('connected', function() {
        console.log('Clinton Mongoose connected to: ' + dbURL);
    });
    mongoose.connection.on('error', function(err) {
        console.log('Mongoose connection error' + err);
    });
    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose Disconnected');
    });
};


