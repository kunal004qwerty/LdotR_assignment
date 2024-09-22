
const UserModel = require('../models/user.model')

const httpGetAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}, {
            _id: 0,
            __v: 0,
            updatedAt: 0,
        })
        return res.status(201).json(users)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}

const httpCreateUser = async (req, res) => {
    try {
        const { name, email, age } = req.body
        const user = await new UserModel({ name, email, age })
        let result = await user.save()

        return res.status(201).json(result)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const httpGetUserByEmail = async (req, res) => {
    try {
        const email = req.query.email

        if (!email) return res.status(400).json({ error: "Email query parmeter is required" })

        const user = await UserModel.findOne({ email: email })

        if (!user) return res.status(400).json({ message: "User not Found" })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })

    }
}


module.exports = {
    httpGetAllUsers,
    httpCreateUser,
    httpGetUserByEmail,
}