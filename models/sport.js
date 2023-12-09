const { model } = require('mongoose');
const { mongooseSportShema } = require('../schema/sports');

const Sport = model('sport', mongooseSportShema);

module.exports = Sport;
