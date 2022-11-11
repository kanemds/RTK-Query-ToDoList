const router = require('express').Router()
const createTodo = require('../../controllers/toDoList/createTodoController')
const getAllTodos = require('../../controllers/toDoList/getAllTodosController')
const updateTodo = require('../../controllers/toDoList/updateTodoController')

router.post('/', createTodo)
router.get('/', getAllTodos)
router.put('/:id', updateTodo)

module.exports = router