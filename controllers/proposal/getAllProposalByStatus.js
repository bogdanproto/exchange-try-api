const moment = require('moment');
const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  createPopulate,
  createSelector,
  HttpError,
} = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalByStatus = async (req, res) => {
  const currentDate = moment().endOf('day').format('YYYY-MM-DD');

  const { _id: userId } = req.user;
  const { statusproposal } = req.params;

  if (statusproposal !== 'reservation' && statusproposal !== 'accepted') {
    throw HttpError(status.PROPOSAL_STATUS);
  }

  const tempData = await Proposal.find({
    statusProposal: statusproposal,
    ownerDate: { $exists: true, $gte: currentDate },
    $or: [{ ownerId: userId }, { customerId: userId }],
  })
    .populate(createPopulate('reservation'))
    .select(createSelector('reservation'))
    .lean();

  const data = proposalHandler(tempData);

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(getAllProposalByStatus);
