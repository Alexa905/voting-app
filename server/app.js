/* jslint node: true */
'use strict'

const express = require('express')
const cors = require("cors");
const helmet = require('helmet')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./router.js')
const cookieParser = require('cookie-parser')



app.use(cors());
app.use(cookieParser())
app.use(helmet())

app.use(express.static('dist'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))


//  Use routes defined in Route.js and prefix it with api
app.use('/api', routes)

app.use(function (req, res, next) {

  res.header({
    // Website you wish to allow to connect
    'Access-Control-Allow-Origin': '*',
    // Request methods you wish to allow
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    // Request headers you wish to allow
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  })

  next()
})

app.get('/', function (req, res) {
  res.sendFile('index.html')
})


module.exports = app;
