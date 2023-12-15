const { model } = require('mongoose');
const { mongooseEqptShema } = require('../schema/equipment');

const Eqpt = model('eqpt', mongooseEqptShema);

module.exports = Eqpt;
