const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Content-Management-App')

const postSchema = new mongoose.Schema({

    Title : String,
    Content : String,
    Category : String,
    userId : String,
    Date : Date
})

const posts = mongoose.model('posts', postSchema)

module.exports = posts