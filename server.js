//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
// 		Server
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

// Dependencies
// express.js makes writing middleware for node.js servers easier //
var express = require("express"),
  app = express(),
  http = require('http').createServer(app),
  io = require('socket.io')(http),
  // morgan logs the requests that are made to your server and gives color coded status //
  logger = require('morgan'),
  path = require('path'),
  port = process.env.PORT || 8080

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, './src')))
// http://localhost:3000/api/v1/'./public/*'

http.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})

io.on('connection', (socket) => {
  socket.on('card selected', (card) => {
    io.emit('card selected', card)
  })
})
