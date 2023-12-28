const { status } = require('../../consts');
const { decoratorCtrl, proposalHandler } = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalReservation = async (req, res) => {
  const { _id: userId } = req.user;

  const tempData = await Proposal.find({
    isAccepted: 'reservation',
    $or: [{ ownerId: userId }, { customerId: userId }],
  })
    .populate([
      {
        path: 'ownerId',
        select: '_id name phone experience avatarCloudURL equipments',
      },
      { path: 'spot' },
      { path: 'ownerEqpts', select: '_id title size' },
      {
        path: 'customerId',
        select: '_id name phone experience avatarCloudURL equipments',
      },
      {
        path: 'customerEqpts',
        select: '_id title size',
      },
    ])
    .select(
      'ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone customerTime customerMsg createdAt updatedAt'
    )
    .lean();

  const data = proposalHandler(tempData);

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(getAllProposalReservation);
