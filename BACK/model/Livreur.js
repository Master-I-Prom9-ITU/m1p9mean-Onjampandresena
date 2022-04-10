var mongoose = require('mongoose');

var livreurSchema = new mongoose.Schema({

});

const Livreur = mongoose.model('Livreur', livreurSchema);

module.exports = Livreur;
