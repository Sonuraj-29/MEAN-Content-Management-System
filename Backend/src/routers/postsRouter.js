const express = require('express')
const router = express.Router()
const posts = require('../models/postsModel')

router.post('/', (req,res)=>{

    var newPost = {
        Title : req.body.Title,
        Content : req.body.Content,
        Category : req.body.Category,
        UserId : req.body.UserId,
        Date : req.body.Date
    }

    var newPost = new posts(newPost)
    newPost.save()

    res.send({message : "New Post created successfully",
                        status : 'success'})
})

router.get('/all/:user', (req,res)=>{
    posts.find({ UserId : req.params.user}).then((posts)=>{
        res.send(posts)
    })
})

router.get('/:category/:user', (req,res)=>{
    console.log(req.params)
    posts.find({Category : req.params.category, UserId : req.params.user}).then((posts)=>{
        res.send(posts)
    })
})

router.get('/:category',(req,res)=>{
    console.log(req.params.category)
    posts.find({ Category : req.params.category}).then((posts)=>{
        res.send(posts)
    })
})

router.get('/',(req,res)=>{
    posts.find().then((posts)=>{
        res.send(posts)
    })
})

module.exports = router