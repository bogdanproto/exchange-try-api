const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Eqpt } = require('../../models');

const getEqpts = async (req, res) => {
  const equipments = await Eqpt.find();

  res.json({ ...status.GET_SUCCESS, data: { equipments } });
};

module.exports = decoratorCtrl(getEqpts);
