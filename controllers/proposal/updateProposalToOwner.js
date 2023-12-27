const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  toCheckIdInCollection,
  HttpError,
} = require('../../helpers');
const { Proposal } = require('../../models');

const updateProposalToOwner = async (req, res) => {
  const ownerData = req.body;
  const { id: proposalId } = req.params;
  const { _id: userId } = req.user;

  const { ownerId } = await toCheckIdInCollection(proposalId, Proposal);

  if (ownerId.toString() !== userId.toString()) {
    throw HttpError(status.USER_UNAUTHORIZED_OPERATION);
  }

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    { ...ownerData },
    {
      new: true,
    }
  )
    .populate([
      {
        path: 'ownerId',
        select: '_id name phone experience avatarCloudURL equipments',
      },
      { path: 'spot' },
      { path: 'ownerEqpts', select: '_id title size' },
    ])
    .select(
      'ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone createdAt updatedAt'
    )
    .lean();

  const data = proposalHandler([updatedProposal]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalToOwner);
