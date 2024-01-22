const { status } = require('../../consts');
const {
  decoratorCtrl,
  createPopulate,
  notifyHandler,
  createPagination,
} = require('../../helpers');
const { Notify } = require('../../models');

const getAllNotify = async (req, res) => {
  const { _id: userId } = req.user;
  const { page, limit } = req.query;

  const pagination = createPagination({ page, limit });

  const tempData = await Notify.find({ recipient: userId }, null, pagination)
    .sort({ createdAt: -1 })
    .populate(createPopulate('notify'))
    .lean();

  const items = notifyHandler(tempData);

  const total = await Notify.find({ recipient: userId }).countDocuments();
  const totalNotViewed = await Notify.find({
    recipient: userId,
    statusNotify: 'notviewed',
  }).countDocuments();

  res.json({
    ...status.GET_SUCCESS,
    data: {
      items,
      page,
      limit,
      total,
      totalNotViewed,
    },
  });
};

module.exports = decoratorCtrl(getAllNotify);
