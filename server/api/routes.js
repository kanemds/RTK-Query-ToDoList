const router = require('express').Router()

const user = require('./all/user')

router.use('/user', user)

module.exports = router