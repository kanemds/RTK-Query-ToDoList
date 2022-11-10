const bcrypt = require('bcrypt')
const User = require('../../models/user')


const signIn = async (req, res) => {

  try {
    const userName = req.body.name
    const currentUser = await User.findOne({ name: userName })
    if (!currentUser) return res.status(401).json("Not Authorized")

    const isCorrect = await bcrypt.compare(req.body.password, currentUser.password)
    if (!isCorrect) return res.status(401).json("Not Authorized")

    res.status(200).json(`${userName} has logged in.`)

  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = signIn