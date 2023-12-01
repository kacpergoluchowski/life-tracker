const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: String
}, {
    collection: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;