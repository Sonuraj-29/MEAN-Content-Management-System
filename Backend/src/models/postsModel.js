const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Content-Management-App')

const postSchema = new mongoose.Schema({
    Title : String,
    Author : String,
    Content : String,
    Category : String,
    UserId : String,
    Date : String
})
const posts = mongoose.model('posts', postSchema)

module.exports = posts