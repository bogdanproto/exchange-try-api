const { status } = require('../../consts');
const { decoratorCtrl, HttpError } = require('../../helpers');
const { Eqpt, User } = require('../../models');

const deleteEqpt = async (req, res) => {
  const { id: eqptId } = req.params;
  const { _id: userId, eqpts: userEqpts } = req.user;

  const isUsersEqpt = userEqpts.find(({ _id }) => _id.toString() === eqptId);

  if (!isUsersEqpt) {
    throw HttpError(status.NOT_MATCH_ID);
  }

  const deletedEqpt = await Eqpt.findByIdAndDelete(eqptId).select(
    '_id title size'
  );

  if (!deletedEqpt) {
    throw HttpError(status.NOT_FOUND_ID);
  }

  await User.findByIdAndUpdate(userId, {
    $pull: { eqpts: eqptId },
  });

  res.json({ ...status.DELETE_SUCCESS, data: { deletedEqpt } });
};

module.exports = decoratorCtrl(deleteEqpt);
