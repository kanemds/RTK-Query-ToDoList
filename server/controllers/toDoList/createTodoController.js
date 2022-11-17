const TodoList = require('../../models/todoList')
const User = require('../../models/user')

const createTodo = async (req, res) => {

  try {
    const newTodo = new TodoList(req.body)

    await newTodo.save()
    res.status(200).json("Added to List")
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = createTodo