const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()   
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false})
    .then(() => {
        app.listen(config.port)
        console.log(`server started on port ${config.port}`)
    })
    
    