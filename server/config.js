require('dotenv').config()
const mongoose = require('mongoose')

const config = {
    app_name: process.env['APP_NAME'],
    port:process.env['PORT'] ?? 3000,
    db_uri:process.env['MONGO_URL'] ?? 'mongodb://localhost:27017/LdotR_Assignment',
}

module.exports = config