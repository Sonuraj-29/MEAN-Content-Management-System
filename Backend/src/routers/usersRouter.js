const express = require('express')
const router = express.Router()
const users = require('../models/usersModel')

router.get('/',(req,res)=>{
    users.find().then((users)=>{
        res.send(users)
    })
})

module.exports = router