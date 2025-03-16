var express = require('express');
var router = express.Router();

const todos = [{id: 1, name: 'Do dishes', completed: false}];

/* GET todos list. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

module.exports = router;
