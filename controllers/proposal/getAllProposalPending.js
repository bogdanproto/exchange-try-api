const { status } = require('../../consts');
const { decoratorCtrl, proposalHandler } = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalPending = async (_, res) => {
  const tempData = await Proposal.find({ isAccepted: 'pending' })
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

  const data = proposalHandler(tempData);

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(getAllProposalPending);