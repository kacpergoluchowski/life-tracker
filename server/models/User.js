const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: String
}, {
    collection: email
})

const userModel = mongoose.model('UserModel', userSchema);

module.exports = userModel;