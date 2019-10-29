// Core & npm modules
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser')

// My modules
const config = require('./config/database')
const authentication = require('./routes/authentication')(router)
const blogs = require('./routes/blogs')(router)


//Setting up mongoose
mongoose.Promise = global.Promise
mongoose.connect(config.uri,{ useNewUrlParser: true }, (err) => {
    if(err){
        console.log(`Could not connect to database, ${err}`)
    }else{
        console.log(`Connected to database: ${config.db}`)
    }
})


// Inititalizing express

let app = express()
let port = 8000


// MIDDLEWARES

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication)
app.use('/blogs', blogs)


// ROUTES

app.get('/', (req, res) => {
    res.send('<h1>Cuberum blog api</h1>')
})


// LISTEN

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})