var mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
    UserId : String,
    Restaurant : String,
    Plat : String,
    Nombre : Number,
    DateCommande : Date,
    Status : String
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
