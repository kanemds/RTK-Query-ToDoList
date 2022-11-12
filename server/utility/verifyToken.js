const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
  const currentToken = req.cookies.access_token

  if (!currentToken) return res.status(403).json("Not Authenticated")

  jwt.verify(currentToken, process.env.ACCESS_TOKEN_SECRET, (error, verify) => {
    if (error) return res.status(403).json("Not Authenticated")
    req.verify = verify
    console.log(req.verify)
    next()
  })
}

module.exports = verifyToken