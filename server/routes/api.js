'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
//const Todo = require('../../config/mongoose.config');
const Video = require('../models/apparel');
const assert = require('assert');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const fs = require('fs');
const Schema = mongoose.Schema;
const config = require('../../config/config')
const path = require('path');


/*
var dbURL = config.dev.db;
    /* if (process.env.NODE_ENV === 'production') {
        dbURL = process.env.MONGOLAB.URI;
    }
    mongoose.Promise = global.Promise;

    let db = mongoose.connection;
    
    // Connect to MOngo
    db(dbURL);
    
    // Create Schema
    const Img = new Schema({
        img: {
            id: Number,
            filename: String,
            data: [Buffer],
            contentType: String
        }
    });

    // Create Model
    const img = mongoose.model('img', Img);
    const imgPath = path.join(process.cwd(), 'img/contact.jpg'); 

    let db = mongoose.connection
    db.on('open', function () {
        console.error('Mongo is Open');
        
        //Empty the collection
        img.remove(function(err) {
            if(err) throw err;
             console.error('removed old docs');
        });
           

        //Store Image in binary in Mongo
        let i = new img;
        i.img.data = path.join(process.cwd(), 'img/home.jpg', 'img/contact.jpg');
        i.img.contentType = "image/jpg";
        i.img.filename = "Contact";
        i.img.id = 2;
            
        i.save(function(err, i) {
            if(err) throw err;
            console.error('Image Saved to Mongo');

            // Start fake server
               
            router.get('/image', function(req, res, next) {
                img.findById(i, function(err, doc) {
                    if(err) return next(err);
                    res.contentType(doc.img.contentType);
                    res.send(doc.img.data);
                });
            });

            db.on('close', function() {
                console.error('dropping db connection');
                db.db.dropDatabase(function() {
                    console.error('closing DB connection');
                    db.close();
                });
            });
        });
    
    });










router.get('/todos', function (req, res, next) {
    Todo.find(function(err, files) {
        if(err) res.send(err);
        res.json(files);
    });
});

*/



module.exports = router;