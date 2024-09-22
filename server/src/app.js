const express = require('express')
const api = require('./routes/api')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const app = express()
app.use(cors({
   origin: '*'
}))

app.use(morgan('combined'))



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/v1", api)


// for using static file like JS, CSS otherwise it may or may not run
app.use(express.static(path.join(__dirname, "..", "public")))

// after localhost:8000/any-routes leads to Frontend
// localhost:8000/v1/ leads to API
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})


module.exports = {
    app
}