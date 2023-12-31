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

const updateProposalToOwner = async (req, res) => {
  const ownerData = req.body;
  const { id: proposalId } = req.params;
  const { _id: userId } = req.user;

  const { ownerId, statusProposal } = await toCheckIdInCollection(
    proposalId,
    Proposal
  );

  if (ownerId.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  if (statusProposal !== 'pending') {
    throw HttpError(status.PROPOSAL_RESERVATION);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    { ...ownerData },
    {
      new: true,
    }
  )
    .populate(createPopulate('pending'))
    .select(createSelector('pending'))
    .lean();

  const data = proposalHandler([updatedProposal]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalToOwner);
