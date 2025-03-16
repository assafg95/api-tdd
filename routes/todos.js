const express = require('express');
const createError = require('http-errors');
const router = express.Router();

const todos = [{id: 1, name: 'Do dishes', completed: false}];

/* GET todos list. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function(req, res, next) {
    const foundTodo = todos.find(todo => todo.id === parseInt(req.params.id));

    if(!foundTodo) {
        return next(createError(404, "Not found"));
    }
    res.json(foundTodo);
});

router.post('/', function(req, res, next) {
    if(!req.body.name) {
        return next(createError(422, "Name is required"));
    }
    if(typeof req.body.name !== 'string') {
        return next(createError(422, "Validation Error - Name must be a string"));
    }
    const newTodo = {
        id: todos.length + 1,
        name: req.body.name,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
module.exports = router;
