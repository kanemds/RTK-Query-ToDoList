const TodoList = require('../../models/todoList')
const User = require('../../models/user')

const getAllTodos = async (req, res) => {

  try {
    const getAll = await TodoList.find()
    res.status(200).json(getAll)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = getAllTodos