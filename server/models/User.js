const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: String
}, {
    collection: email
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;