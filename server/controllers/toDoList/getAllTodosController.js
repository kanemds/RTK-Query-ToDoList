const TodoList = require('../../models/todoList')
const User = require('../../models/user')

const getAllTodos = async (req, res) => {
  console.log(req.verify.id)
  try {

    const getAll = await TodoList.find({ userId: req.verify.id }).sort({ createdAt: -1 })

    res.status(200).json(getAll)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = getAllTodos