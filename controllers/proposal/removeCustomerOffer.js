const { status } = require('../../consts');
const {
  decoratorCtrl,
  toCheckIdInCollection,
  HttpError,
  proposalHandler,
  createPopulate,
  createSelector,
} = require('../../helpers');
const { Proposal } = require('../../models');

const removeCustomerOffer = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: proposalId } = req.params;

  const { customerId } = await toCheckIdInCollection(proposalId, Proposal);

  if (!customerId || customerId.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    {
      customerId: null,
      customerEqpts: null,
      customerTime: null,
      customerMsg: null,
      statusProposal: 'pending',
    },
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

module.exports = decoratorCtrl(removeCustomerOffer);
