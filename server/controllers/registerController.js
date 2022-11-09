
const User = require('../models/user')

const register = async (req, res) => {
  console.log(req.body)
  try {
    const newUser = new User(req.body)

    await newUser.save()
    res.status(200).json("New User has been created.")
  } catch (error) {
    res.status(401).json(error)
  }

}

module.exports = { register }