const router = require('express').Router()
const createTodo = require('../../controllers/toDoList/createTodoController')
const getAllTodos = require('../../controllers/toDoList/getAllTodosController')

router.post('/', createTodo)
router.get('/', getAllTodos)

module.exports = router