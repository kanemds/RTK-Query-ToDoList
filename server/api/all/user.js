const router = require('express').Router()
const deleteUser = require('../../controllers/deleteControoler')
const { register } = require('../../controllers/registerController')
const userUpdate = require('../../controllers/updateController')

router.post('/register', register)
router.put('/update/:id', userUpdate)
router.delete('/delete/:id', deleteUser)

module.exports = router

