const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Content-Management-App')

const userSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    UserRole : String
})
const users = mongoose.model('user', userSchema)

module.exports = users