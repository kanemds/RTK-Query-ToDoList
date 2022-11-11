const router = require('express').Router()
const createTodo = require('../../controllers/toDoList/createTodoController')
const deleteTodo = require('../../controllers/toDoList/deleteTodoController')
const getAllTodos = require('../../controllers/toDoList/getAllTodosController')
const updateTodo = require('../../controllers/toDoList/updateTodoController')


router.post('/', createTodo)
router.get('/', getAllTodos)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router