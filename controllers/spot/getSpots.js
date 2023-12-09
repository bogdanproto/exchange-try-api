const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Spot } = require('../../models');

const getSpots = async (req, res) => {
  const spots = await Spot.find();

  res.json({ ...status.GET_SUCCESS, data: { spots } });
};

module.exports = decoratorCtrl(getSpots);
