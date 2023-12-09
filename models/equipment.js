const { model } = require('mongoose');
const { mongooseEqptShema } = require('../schema/equipment');

const Eqpt = model('equipment', mongooseEqptShema);

module.exports = Eqpt;
