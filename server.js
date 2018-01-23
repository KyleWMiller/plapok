//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
// 		Server
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

// Dependencies
// express.js makes writing middleware for node.js servers easier //
var express = require("express"),
  app = express(),
  http = require('http').createServer(app),
  io = require('socket.io')(http),
  bodyparser = require('body-parser'),
  // morgan logs the requests that are made to your server and gives color coded status //
  logger = require('morgan'),
  path = require('path'),
 apiRouter = require('./apiRoutes'),
  port = process.env.PORT || 8080

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, './src')))
// http://localhost:3000/api/v1/'./public/*'
app.use('/api/v2', apiRouter)
http.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})

io.on('connection', (socket) => {
  socket.on('join room', (user) => {
    io.emit('join room', user)
      console.log(user)
  })
})
