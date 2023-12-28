const { status } = require('../../consts');
const {
  decoratorCtrl,
  toCheckIdInCollection,
  HttpError,
} = require('../../helpers');
const { Proposal } = require('../../models');

const deleteProposal = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: proposalId } = req.params;

  const { ownerId } = await toCheckIdInCollection(proposalId, Proposal);

  if (ownerId.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  const { _id } = await Proposal.findByIdAndDelete(proposalId);

  res.json({ ...status.DELETE_SUCCESS, data: { _id } });
};

module.exports = decoratorCtrl(deleteProposal);
