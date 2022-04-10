var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

});

const User = mongoose.model('User', userSchema);

module.exports = User;
