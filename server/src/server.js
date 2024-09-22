const http = require('http')
require('dotenv').config()

const { app } = require('./app')
const { mongoConnect } = require('./services/mongo')
const config = require('../config')





const PORT = config.port || 8000

const server = http.createServer(app)


async function startServer(params) {

    await mongoConnect()

    server.listen(PORT, () => {
        console.log(`server listing on PORT:${PORT}`);
        console.log("Hello World!");

    })
}


startServer()