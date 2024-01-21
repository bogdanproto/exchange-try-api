const { status } = require('../../consts');
const {
  decoratorCtrl,
  createPopulate,
  notifyHandler,
} = require('../../helpers');
const { Notify } = require('../../models');

const getAllNotify = async (req, res) => {
  const { _id: userId } = req.user;

  const tempData = await Notify.find({ recipient: userId })
    .sort({ createdAt: -1 })
    .populate(createPopulate('notify'))
    .lean();

  const data = notifyHandler(tempData);

  res.json({
    ...status.GET_SUCCESS,
    data,
  });
};

module.exports = decoratorCtrl(getAllNotify);
