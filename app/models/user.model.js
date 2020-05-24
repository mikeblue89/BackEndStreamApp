const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
     
    name: String,
    lastName: String,    
    email: String,
    nick: String,
    password: String,
    roles: String

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);