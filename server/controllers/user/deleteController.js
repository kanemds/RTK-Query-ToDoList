const User = require('../../models/user')

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const deletedUser = await User.findByIdAndDelete(id)
    res.status(200).json("User has been delete")
  } catch (error) {
    res.status(401).json("Not authenticated")
  }
}

module.exports = deleteUser