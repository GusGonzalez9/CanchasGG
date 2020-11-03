const express = require('express')
const router = express.Router()
const passport = require('passport')
const {getUsers, addUser, getOneUser, validateUser, logoutUser} = require('./controllers/users-controllers')

router.get('/', getUsers)
router.post('/', addUser)
router.get('/me', validateUser)
router.get('/:id', getOneUser)
router.post('/login', passport.authenticate('local'), validateUser)
router.post('/logout', logoutUser)

module.exports = router