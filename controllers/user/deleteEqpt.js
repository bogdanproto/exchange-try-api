const { status } = require('../../consts');
const { decoratorCtrl, HttpError } = require('../../helpers');
const { User } = require('../../models');

const deleteEqpt = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: eqptId } = req.params;

  const user = await User.findById(userId);

  const deletedEqpt = user.equipments.find(
    item => item._id.toString() === eqptId
  );

  if (!deletedEqpt) {
    throw HttpError(status.NOT_FOUND_ID);
  }

  await User.findByIdAndUpdate(userId, {
    $pull: { equipments: { _id: eqptId } },
  });

  res.json({ ...status.DELETE_SUCCESS, deletedEqpt });
};

module.exports = decoratorCtrl(deleteEqpt);
