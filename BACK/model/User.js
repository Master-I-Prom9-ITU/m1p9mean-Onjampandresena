var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Nom : String,
    Prenom : String,
    DateNaissance : Date,
    Lot : String,
    AdresseMail : String,
    Telephone : String,
    MotDePasse : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
