const router = require('express').Router()
const deleteUser = require('../../controllers/user/deleteController')
const register = require('../../controllers/user/registerController')
const userUpdate = require('../../controllers/user/updateController')
const signIn = require('../../controllers/user/signInController')

router.post('/register', register)
router.post('/signin', signIn)
router.put('/update/:id', userUpdate)
router.delete('/delete/:id', deleteUser)

module.exports = router

