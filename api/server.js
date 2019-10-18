const express = require('express');

const Heroes = require('../overwatch/overwatchModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/heroes', (req, res) => {
    Heroes.getAll()
        .then(heroes => {
            res.status(200).json(heroes);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;
