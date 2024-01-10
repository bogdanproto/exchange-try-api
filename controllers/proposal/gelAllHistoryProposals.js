const moment = require('moment');
const {
  decoratorCtrl,
  createPopulate,
  createSelector,
  proposalHandler,
} = require('../../helpers');
const { Proposal } = require('../../models');
const { status } = require('../../consts');

const gelAllHistoryProposals = async (req, res) => {
  const currentDate = moment().endOf('day').format('YYYY-MM-DD');

  const { _id: userId } = req.user;

  const tempData = await Proposal.find({
    $or: [
      {
        $and: [
          { statusProposal: 'accepted' },
          { ownerDate: { $exists: true, $lt: currentDate } },
          { $or: [{ ownerId: userId }, { customerId: userId }] },
        ],
      },
      {
        $and: [
          { statusProposal: 'cancelled' },
          { $or: [{ ownerId: userId }, { customerId: userId }] },
        ],
      },
    ],
  })
    .populate(createPopulate('cancelled'))
    .select(createSelector('cancelled'))
    .lean();

  const data = proposalHandler(tempData);

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(gelAllHistoryProposals);
