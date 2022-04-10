var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
