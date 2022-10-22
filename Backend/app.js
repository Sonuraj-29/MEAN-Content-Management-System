const express = require('express')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use(express.urlencoded( { extended : true } ))
app.use(express.json())

const port = 3000

// Routers
const registerRouter = require('./src/routers/registerRouter')
const loginRouter = require('./src/routers/loginRouter')

// Routes
app.use('/register', registerRouter)
app.use('/login', loginRouter)

app.listen( port, function(){
    console.log('Listening on PORT ' + port)
})
