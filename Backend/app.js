const express = require('express')
const cors = require('cors')

const app = new express()
app.use(cors())
app.use(express.urlencoded( { extended : true } ))
app.use(express.json())

const port = 8080

app.listen( port, function(){
    console.log('Listening on PORT ' + port)
})
