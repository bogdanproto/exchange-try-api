const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  toCheckIdInCollection,
} = require('../../helpers');
const { Proposal } = require('../../models');

const updateProposalToCustomer = async (req, res) => {
  const customerData = req.body;
  const { id: proposalId } = req.params;
  const { _id: customerId } = req.user;

  await toCheckIdInCollection(proposalId, Proposal);

  const updatedProposal = await Proposal.findByIdAndUpdate(
    proposalId,
    { customerId, ...customerData, isAccepted: 'reservation' },
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

  const data = proposalHandler([updatedProposal]);

  res.json({ ...status.UPDATE_SUCCESS, data: data[0] });
};

module.exports = decoratorCtrl(updateProposalToCustomer);
