var mongoose = require('mongoose');

var livreurSchema = new mongoose.Schema({
    Nom: String,
    Prenom: String,
    Telephone: String
});

const Livreur = mongoose.model('Livreur', livreurSchema);

module.exports = Livreur;
