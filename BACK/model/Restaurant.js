var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    Nom : String,
    Adresse : String,
    Image : String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
