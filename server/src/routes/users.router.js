const express = require('express')
const { httpGetAllUsers,  httpGetUserByEmail, httpCreateUser } = require('../controllers/users.controllers')

const usersRouter = express.Router()


// users
usersRouter.get('/', httpGetAllUsers)
usersRouter.post('/', httpCreateUser)
usersRouter.get('/by-email', httpGetUserByEmail)

module.exports = {
    usersRouter
}