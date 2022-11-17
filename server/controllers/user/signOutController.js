const User = require('../../models/user')

const signOut = async (req, res) => {
  try {
    const token = req.cookies
    console.log(token)
    res.clearCookie('access_token', { httpOnly: true }).status(204).json('User Sign Out')
  } catch (error) {
    res.status(403).json("Not Authenticated")
  }
}

module.exports = signOut