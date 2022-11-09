const router = require('express').Router()
const { register } = require('../../controllers/registerController')
const userUpdate = require('../../controllers/updateController')

router.post('/register', register)
router.put('/update/:id', userUpdate)

module.exports = router

