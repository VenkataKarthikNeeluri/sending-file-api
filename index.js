const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectDb = require('./db/connect')

const PORT = process.env.PORT

const app = express()

// static
app.use("/", express.static("uploads"))

// body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// extenal middleware

app.use(cors())

// default route
app.use(`/file`, require('./route/fileRoute'))

// path not found
app.all(`/**`, (req,res) => {
    return res.status(404).json({ msg: `Requested path not found`})
})

// server listen 
app.listen(PORT, () => {
    connectDb()
    console.log(`server is started @ http://localhost:${PORT}`)
})