const { status } = require('../../consts');
const { decoratorCtrl, proposalHandler } = require('../../helpers');
const { Proposal } = require('../../models');

const createProposal = async (req, res) => {
  const ownerProposal = req.body;
  const { _id } = req.user;

  const proposal = {
    ...ownerProposal,
    ownerId: _id,
  };

  const { _id: idNewProposal } = await Proposal.create(proposal);
  const tempData = await Proposal.findById(idNewProposal)
    .populate([
      { path: 'ownerId', select: '-_id name phone avatarCloudURL equipments' },
      { path: 'spot', select: '-_id' },
      { path: 'ownerEqpts', select: '_id title size' },
    ])
    .select(
      'ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone createdAt updatedAt'
    )
    .lean();

  const data = proposalHandler([tempData]);

  res.json({ ...status.CREATED, data: data[0] });
};

module.exports = decoratorCtrl(createProposal);
