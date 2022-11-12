const User = require('../../models/user')

const deleteUser = async (req, res) => {

  try {
    if (req.params.id !== req.verify.id && !req.verify.isAdmin) {
      return res.status(401).json("Not authenticated")
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been delete")
  } catch (error) {
    res.status(401).json("Not authenticated")
  }
}

module.exports = deleteUser