const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Load Sayings
const sayings = require('./sayings/sayings')

const newSaying = () =>{
    const index = Math.floor(Math.random() * ((sayings.length) - 0) + 0)
    return sayings[index]
}

// Define paths
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsDirecory = path.join(__dirname,'../templates/views')
const partialsDirecory = path.join(__dirname,'../templates/partials')

// Setup the server
const app = express()

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsDirecory)
hbs.registerPartials(partialsDirecory)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Automatically parse json to object
app.use(express.json())

// Setup routes
const router = new express.Router()
router.get('',(req,res)=>{
    res.render('index',{
        title:"I'M LORD FAY BABY",
        saying:newSaying()
    })
})
app.use(router)

// Exports the app
module.exports = app