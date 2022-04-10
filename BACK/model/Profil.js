var mongoose = require('mongoose');

var profilSchema = new mongoose.Schema({
    Nom: String,
    Description : String
});

const Profil = mongoose.model('Profil', profilSchema);

module.exports = Profil;
