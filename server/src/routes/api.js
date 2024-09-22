const express = require('express')
const { blogsRouter } = require('./blogs.router')
const { usersRouter } = require('./users.router')

const api = express.Router()

api.use('/blogs', blogsRouter)
api.use('/users', usersRouter)


module.exports = api