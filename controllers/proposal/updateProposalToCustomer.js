const { status, typeNotify } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  toCheckIdInCollection,
  HttpError,
  createPopulate,
  createSelector,
} = require('../../helpers');
const { Proposal, Notify } = require('../../models');

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

  await Notify.create({
    initiator: customerId,
    recipient: updatedProposal.ownerId,
    typeNotify:
      statusProposal === 'pending'
        ? typeNotify.customer_offer
        : typeNotify.customer_update,
    source: updatedProposal._id,
  });

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalToCustomer);
