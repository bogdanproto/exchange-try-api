const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  toCheckIdInCollection,
  HttpError,
  createPopulate,
  createSelector,
} = require('../../helpers');
const { Proposal } = require('../../models');

const updateProposalToCustomer = async (req, res) => {
  const customerData = req.body;
  const { id: proposalId } = req.params;
  const { _id: customerId } = req.user;

  const { statusProposal } = await toCheckIdInCollection(proposalId, Proposal);

  if (statusProposal === 'accepted') {
    throw HttpError(status.PROPOSAL_ACCEPTED);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    { customerId, ...customerData, statusProposal: 'reservation' },
    {
      new: true,
    }
  )
    .populate(createPopulate('reservation'))
    .select(createSelector('reservation'))
    .lean();

  const data = proposalHandler([updatedProposal]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalToCustomer);
