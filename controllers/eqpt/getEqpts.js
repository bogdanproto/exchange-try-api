const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Eqpt } = require('../../models');

const getEqpts = async (req, res) => {
  const eqpts = await Eqpt.find().select('_id title size userId');

  res.json({ ...status.GET_SUCCESS, data: { eqpts } });
};

module.exports = decoratorCtrl(getEqpts);
