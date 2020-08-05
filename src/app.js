const express = require('express')
const path = require('path')
// import routers
// const userRouter = require('./routers/user')

// Load Models
// const User = require('./models/user')

// Define paths
const publicDirectoryPath = path.join(__dirname,'../public')

// Setup the server
const app = express()

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Automatically parse json to object
app.use(express.json())

// Setup routes
const router = new express.Router()
// app.use(userRouter)

// Exports the app
module.exports = app