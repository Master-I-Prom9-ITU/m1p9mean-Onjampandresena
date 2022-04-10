var mongoose = require('mongoose');

var platSchema = new mongoose.Schema({
    Nom : String,
    Description : String,
    Categorie : String,
    Image : String,
    Prix : Number,
    Restaurant : String
});

const Plat = mongoose.model('Plat', platSchema);

module.exports = Plat;
