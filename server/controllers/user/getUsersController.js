const User = require('../../models/user')

const getUsers = async (req, res) => {
  try {
    if (!req.verify.isAdmin) return res.status(403).json("Not Authenticated")
    // only one
    // const users = await User.find().select("-password")
    const users = await User.find({}, { name: 1, disabledEdit: 1 }) // 1 selected field, {name:0} deselecting field

    res.status(200).json(users)
  } catch (error) {
    res.status(401).json("Not Authenticated")
  }
}

module.exports = getUsers