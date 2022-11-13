const express = require('express')
const router = express.Router()
const users = require('../models/usersModel')

router.get('/',(req,res)=>{
    users.find({$or:[{UserRole : 'Admin'},{UserRole : 'User'}]}).then((users)=>{
        res.send(users)
    })
})

module.exports = router