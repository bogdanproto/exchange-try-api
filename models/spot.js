const { model } = require('mongoose');
const { mongooseSpotShema } = require('../schema/spots');

const Spot = model('spot', mongooseSpotShema);

module.exports = Spot;
