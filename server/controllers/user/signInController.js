const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const signIn = async (req, res) => {

  try {
    const userName = req.body.name
    const currentUser = await User.findOne({ name: userName })
    if (!currentUser) return res.status(401).json("Not Authorized Please Try Again")

    const isCorrect = await bcrypt.compare(req.body.password, currentUser.password)
    if (!isCorrect) return res.status(401).json("Not Authorized")

    const createdToken = jwt.sign({ id: currentUser._id, isAdmin: currentUser.isAdmin }, process.env.ACCESS_TOKEN_SECRET)

    res.cookie('access_token', createdToken, { httpOnly: true }).status(200).json(`${userName} has logged in.`)

  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = signIn