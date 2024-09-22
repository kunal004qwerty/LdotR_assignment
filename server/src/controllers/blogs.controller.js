


const mongoose = require('mongoose')
const BlogModel = require('../models/blog.model')

const httpCreateBlog = async (req, res) => {
    try {

        const { title, content, author, tags } = req.body
        const blog = await new BlogModel({ title, content, author, tags })
        let result = await blog.save()

        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' })

    }
}


const httpGetAllBlogs = async (req, res) => {
    try {
        let data = await BlogModel.find({}, {
            __v: 0
        })

        return res.status(200).json(data)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

const httpGetBlog = async (req, res) => {
    try {
        const { blogId } = req.params;

        if (!mongoose.isValidObjectId(blogId)) {
            return res.status(404).json({ message: "Invalid Blog Id" });
        }

        let blog = await BlogModel.findById(blogId);
        if (!blog) return res.status(404).json({ message: 'Blog does not exist' });

        return res.status(200).json(blog);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error!');
    }
};

const httpUpdateBlog = async (req, res) => {
    try {

        let { blogId } = req.params
        let updatedData = req.body

        let blog = await BlogModel.findById(blogId)
        if (!blog) return res.status(404).json({ message: 'Blog not exist' })


        let updatedBlog = await BlogModel.findByIdAndUpdate(blogId, updatedData, { new: true })

        return res.status(201).json(updatedBlog)


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}

const httpDeleteBlog = async (req, res) => {
    try {
        let { blogId } = req.params

        let blog = await BlogModel.findById(blogId)
        if (!blog) return res.status(404).json({ message: 'Blog not exist' })

        let deleteBlog = await BlogModel.findByIdAndDelete(blogId)
        return res.status(200).json({ message: `blog of id: ${blogId} delete successfull` })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}

module.exports = {
    httpCreateBlog,
    httpGetAllBlogs,
    httpGetBlog,
    httpUpdateBlog,
    httpDeleteBlog,
}