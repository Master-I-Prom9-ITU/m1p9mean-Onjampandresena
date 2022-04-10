var mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({

});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
