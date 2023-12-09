const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Sport } = require('../../models');

const getSports = async (req, res) => {
  const sports = await Sport.find();

  res.json({ ...status.GET_SUCCESS, data: { sports } });
};

module.exports = decoratorCtrl(getSports);
