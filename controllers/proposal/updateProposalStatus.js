const { status } = require('../../consts');
const {
  decoratorCtrl,
  toCheckIdInCollection,
  HttpError,
  createPopulate,
  createSelector,
  proposalHandler,
} = require('../../helpers');
const { Proposal } = require('../../models');

const updateProposalStatus = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: proposalId } = req.params;
  const { statusProposal: newStatusProposal } = req.body;

  const { ownerId, statusProposal } = await toCheckIdInCollection(
    proposalId,
    Proposal
  );

  if (!ownerId || ownerId.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  if (statusProposal !== 'reservation') {
    throw HttpError(status.PROPOSAL_ONLY_RESERVATION);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    {
      statusProposal: newStatusProposal === 'accept' ? 'accepted' : 'pending',
      ...(newStatusProposal !== 'accept' && {
        customerId: null,
        customerEqpts: null,
        customerTime: null,
        customerMsg: null,
      }),
    },
    { new: true }
  )
    .populate(createPopulate('reservation'))
    .select(createSelector('reservation'))
    .lean();

  const data = proposalHandler([updatedProposal]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalStatus);
