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
const usersRouter = require('./src/routers/usersRouter')
const roleChangeRouter = require('./src/routers/roleChangeRouter')
const categoriesRouter = require('./src/routers/categoriesRouter')
const postsRouter = require('./src/routers/postsRouter')

// Routes
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/changerole', roleChangeRouter)
app.use('/categories', categoriesRouter)
app.use('/posts', postsRouter)

app.listen( port, function(){
    console.log('Listening on PORT ' + port)
})
