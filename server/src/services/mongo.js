const mongoose = require('mongoose')
const config = require('../../config')

const MONGO_URL = config.db_uri


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URL,{})
}

async function mongoDisConnect() {
    await mongoose.disconnect()
}


module.exports = {
    mongoConnect,
    mongoDisConnect,
}