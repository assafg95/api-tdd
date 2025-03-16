var express = require('express');
var router = express.Router();

const todos = [{id: 1, name: 'Do dishes', completed: false}];

/* GET todos list. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function(req, res, next) {
    const foundTodo = todos.find(todo => todo.id === parseInt(req.params.id));
    res.json(foundTodo);
});
module.exports = router;
