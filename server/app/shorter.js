const express = require('express');
const path = require('path');
const nanoid = require('nanoid');
const mongoose = require('mongoose');


const Shorter = require('../models/Shorter');

const config = require('../config');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

const router = express.Router();

const createRouter = (db) => {
    // Product create
    router.post('/links', (req, res) => {
        let links = req.body;
        links.shortUrl = nanoid(7);

        const linker = new Shorter(links);

        linker.save()
            .then(result => res.send(result))
            .catch((error) => res.status(400).send(error));
    });

    // Product get by ID
    router.get('/:id', (req, res) => {
        Shorter.findOne({shortUrl: req.params.id}, function (err, result) {
            if (err) res.status(404).send(err);
            if (result) res.status(301).redirect(result.originalUrl)
        });
    });

    return router;
};

module.exports = createRouter;