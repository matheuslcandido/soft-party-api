const express = require('express')
const { healtCheckRouter } = require('./routes')

const app = express()

app.use(express.json())

app.use('/health_check', healtCheckRouter)

module.exports = app
