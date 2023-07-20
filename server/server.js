const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config()

// middleware
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app,use(bodyParser.json())


app.listen(process.env.PORT, () => console.log(`Server is runnign at port ${process.env.PORT}`))