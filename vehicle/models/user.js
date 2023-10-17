const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "name": String,
    "pseudoName": String,
    "email": string,
    "joinDate": Date.now(),
    "endDate": [Date],
    "id": string,
    "password": String,
    "confirmPassword": String,
    "description": String,

});

module.exports = mongoose.model('User', userSchema);