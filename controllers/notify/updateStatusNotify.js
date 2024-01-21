const { status, statusNotify } = require('../../consts');
const {
  decoratorCtrl,
  toCheckIdInCollection,
  HttpError,
  createPopulate,
  notifyHandler,
} = require('../../helpers');
const { Notify } = require('../../models');

const updateStatusNotify = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: notifyId } = req.params;

  const { recipient } = await toCheckIdInCollection(notifyId, Notify);

  if (recipient.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  const updatedNotify = await Notify.findByIdAndUpdate(
    notifyId,
    {
      statusNotify: statusNotify.viewed,
    },
    { new: true }
  )
    .populate(createPopulate('notify'))
    .lean();

  const data = notifyHandler([updatedNotify]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateStatusNotify);
