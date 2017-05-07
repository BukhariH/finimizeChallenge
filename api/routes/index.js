var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    request('https://api.fixer.io/latest?base=GBP', function(error, response, body) {
      json_body = JSON.parse(body);
      res.json(json_body);
    });
});

module.exports = router;