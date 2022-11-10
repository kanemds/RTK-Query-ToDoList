
const bcrypt = require('bcrypt')
const User = require('../models/user')


const register = async (req, res) => {

  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ ...req.body, password: hash })

    await newUser.save()
    res.status(200).json("New User has been created.")
  } catch (error) {
    res.status(401).json(error)
  }

}

module.exports = register 