const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

const mongoose = require('mongoose')


const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)


app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})