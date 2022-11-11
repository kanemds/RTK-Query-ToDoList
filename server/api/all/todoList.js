const router = require('express').Router()
const createTodo = require('../../controllers/toDoList/createTodoController')

router.post('/', createTodo)

module.exports = router