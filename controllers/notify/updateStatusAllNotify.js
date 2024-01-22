const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Notify } = require('../../models');

const updateStatusAllNotify = async (req, res) => {
  const { _id: userId } = req.user;

  await Notify.updateMany(
    {
      recipient: userId,
      statusNotify: 'notviewed',
    },
    { $set: { statusNotify: 'viewed' } }
  );

  res.json({
    ...status.GET_SUCCESS,
    data: {
      totalNotViewed: 0,
    },
  });
};

module.exports = decoratorCtrl(updateStatusAllNotify);
