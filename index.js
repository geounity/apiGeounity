'use strict'

// debuging
const chalk = require('chalk')
const debug = require('debug')('gu:api:index')

// server
const express = require('express');
const app = express();
const server = require('http').Server(app)

// configs
const config = require('./config');
const cors = require('cors')
const bodyParser = require('body-parser')

// routes
const debatesApi = require('./routes/debates')
const geocommunitiesApi = require('./routes/geocommunities')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

debatesApi(app)
geocommunitiesApi(app)

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

// Express Error Handler
app.use((err, req, res) => {
  debug(`Error: ${err.message}`)
  if (err.message.match(/not found/)) {
    return res.status(404).send({error: err.message})
  }
  res.status(500).send({error: err.message})
})

const handleFatalError = (err) => {
  console.error(`${chalk.red('[fatal error]: ')} ${err.messsage}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(config.port, () => console.log(`${chalk.green('[geounity-api] ')}Listening ${config.host}:${config.port}`))