const router = require('express').Router()

const todoList = require('./all/todoList')
const user = require('./all/user')


router.use('/user', user)
router.use('/todo-list', todoList)

module.exports = router