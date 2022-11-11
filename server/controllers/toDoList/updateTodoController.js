const TodoList = require('../../models/todoList')
const User = require('../../models/user')

const updateTodo = async (req, res) => {
  try {
    const updateCurrentTodo = await TodoList.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    })
    res.status(200).json("Updated Todo")
  } catch (error) {
    res.status(403).json("Not Authenicated")
  }
}

module.exports = updateTodo