const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Content-Management-App')

const categorySchema = new mongoose.Schema({
    Name : String,
})
const categories = mongoose.model('category', categorySchema)

module.exports = categories