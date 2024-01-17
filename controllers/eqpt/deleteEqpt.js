const moment = require('moment');
const { status } = require('../../consts');
const { decoratorCtrl, HttpError } = require('../../helpers');
const { Eqpt, User, Proposal } = require('../../models');

const deleteEqpt = async (req, res) => {
  const { id: eqptId } = req.params;
  const { _id: userId, eqpts: userEqpts } = req.user;
  const currentDate = moment().endOf('day').format('YYYY-MM-DD');

  const isUsersEqpt = userEqpts.find(({ _id }) => _id.toString() === eqptId);

  if (!isUsersEqpt) {
    throw HttpError(status.NOT_MATCH_ID);
  }

  const isEqptInReservationProposal = await Proposal.find({
    $or: [
      {
        $and: [
          { statusProposal: 'accepted' },
          { ownerDate: { $exists: true, $gte: currentDate } },
          { $or: [{ ownerId: userId }, { customerId: userId }] },
          {
            $or: [
              { ownerEqpts: { $in: [eqptId] } },
              { customerEqpts: { $in: [eqptId] } },
            ],
          },
        ],
      },
      {
        $and: [
          { statusProposal: 'reservation' },
          { ownerDate: { $exists: true, $gte: currentDate } },
          { $or: [{ ownerId: userId }, { customerId: userId }] },
          {
            $or: [
              { ownerEqpts: { $in: [eqptId] } },
              { customerEqpts: { $in: [eqptId] } },
            ],
          },
        ],
      },
    ],
  });

  if (isEqptInReservationProposal.length > 0) {
    throw HttpError(status.PROPOSAL_EQPTS);
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
