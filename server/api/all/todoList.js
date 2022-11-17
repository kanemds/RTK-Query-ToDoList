const router = require('express').Router()
const createTodo = require('../../controllers/toDoList/createTodoController')
const deleteTodo = require('../../controllers/toDoList/deleteTodoController')
const getAllTodos = require('../../controllers/toDoList/getAllTodosController')
const updateTodo = require('../../controllers/toDoList/updateTodoController')
const verifyToken = require('../../utility/verifyToken')


router.post('/', createTodo)
router.get('/', verifyToken, getAllTodos)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router