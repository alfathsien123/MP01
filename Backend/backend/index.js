// import library
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const { UrlLogger } = require('./utils')

// create express app
const app = express()

// setting : middleware
app.use(cors()) // Allow CORS: Access-Control-Allow-Origin
app.use(express.json()) // body-parser
app.use(UrlLogger)

// import routes
const routes = require('./routes')
app.use('/api/users', routes.user_routers)

// running server
const PORT = process.env.PORT || 2000
app.listen(PORT, () => console.log(`server is running at port : ${PORT}`))