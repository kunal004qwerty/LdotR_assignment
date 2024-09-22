const express = require('express')
const { httpGetAllBlogs, httpCreateBlog, httpGetBlog, httpUpdateBlog, httpDeleteBlog } = require('../controllers/blogs.controller')


const blogsRouter = express.Router()


// blogs
blogsRouter.get('/', httpGetAllBlogs)
blogsRouter.post('/', httpCreateBlog)
blogsRouter.get('/:blogId', httpGetBlog)
blogsRouter.put('/:blogId', httpUpdateBlog)
blogsRouter.delete('/:blogId', httpDeleteBlog)



module.exports = {
    blogsRouter
}