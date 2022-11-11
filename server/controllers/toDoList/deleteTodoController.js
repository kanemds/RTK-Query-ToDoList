const TodoList = require('../../models/todoList')
const User = require('../../models/user')

const deleteTodo = async (req, res) => {
  try {
    const deleteCurrentTodo = await TodoList.findByIdAndDelete(req.params.id)
    res.status(200).json("Deleted Todo")
  } catch (error) {
    res.status(403).json("Not Authenicated")
  }
}

module.exports = deleteTodo
