const apiRouter = require('express').Router()

apiRouter.post('/joinRoom', () => {
    console.log('someone has joined the room')
})

module.exports = apiRouter
