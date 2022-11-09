const User = require('../models/user')

const userUpdate = async (req, res) => {
  try {


    const id = req.params.id
    const updatedUser = await User.findByIdAndUpdate(id, {
      $set: req.body
    }, {
      new: true
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(403).json("Not Authenicated")
  }
}

module.exports = userUpdate