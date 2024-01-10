const moment = require('moment');
const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  createPopulate,
  createSelector,
} = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalPending = async (_, res) => {
  const currentDate = moment().endOf('day').format('YYYY-MM-DD');

  const tempData = await Proposal.find({
    statusProposal: 'pending',
    ownerDate: { $exists: true, $gte: currentDate },
  })
    .populate(createPopulate('pending'))
    .select(createSelector('pending'))
    .lean();

  const data = proposalHandler(tempData);

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(getAllProposalPending);
