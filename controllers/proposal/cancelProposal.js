const { status, typeNotify } = require('../../consts');
const {
  decoratorCtrl,
  toCheckIdInCollection,
  HttpError,
  createPopulate,
  createSelector,
  proposalHandler,
} = require('../../helpers');
const { Proposal, Notify } = require('../../models');

const cancelProposal = async (req, res) => {
  const { _id: cancelUser } = req.user;
  const { id: proposalId } = req.params;
  const { statusProposal: newStatus, cancelMsg } = req.body;

  const { ownerId, customerId, statusProposal } = await toCheckIdInCollection(
    proposalId,
    Proposal
  );

  if (
    ownerId?.toString() !== cancelUser.toString() &&
    customerId?.toString() !== cancelUser.toString()
  ) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  if (statusProposal !== 'accepted') {
    throw HttpError(status.PROPOSAL_ACCEPTED);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    {
      statusProposal: newStatus,
      cancelMsg,
      cancelUser,
    },
    { new: true }
  )
    .populate(createPopulate('cancelled'))
    .select(createSelector('cancelled'))
    .lean();

  const data = proposalHandler([updatedProposal]);

  await Notify.create({
    initiator: cancelUser,
    recipient:
      cancelUser.toString() === ownerId.toString() ? customerId : ownerId,
    typeNotify: typeNotify.cancel_source,
    source: updatedProposal._id,
  });

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(cancelProposal);
