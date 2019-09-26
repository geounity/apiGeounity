require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 8080
}

module.exports = config