const router = require('express').Router()
const deleteUser = require('../../controllers/user/deleteController')
const register = require('../../controllers/user/registerController')
const userUpdate = require('../../controllers/user/updateController')
const signIn = require('../../controllers/user/signInController')
const getUsers = require('../../controllers/user/getUsersController')
const verifyToken = require('../../utility/verifyToken')
const signOut = require('../../controllers/user/signOutController')

router.get('/', verifyToken, getUsers)
router.post('/register', register)
router.post('/signin', signIn)
router.put('/update/:id', userUpdate)
router.delete('/delete/:id', deleteUser)
router.post('/signout', signOut)

module.exports = router

