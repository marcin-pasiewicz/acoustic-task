const express = require('express');
const request = require('request');

module.exports.create = function initServer() {
    const server = express();

    server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    server.get('/content/:id', function(req, res) {
        let id = req.params.id;
        const url = `https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/${id}`;

        request(url).pipe(res);
    });

    server.get(/.*/, express.static('build'));

    return server;
};
