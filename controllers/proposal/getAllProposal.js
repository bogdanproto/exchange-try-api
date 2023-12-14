const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposal = async (req, res) => {
  const data = await Proposal.find({ isAccepted: 'pending' })
    .populate([
      { path: 'ownerId', select: '-_id name phone avatarCloudURL equipments' },
      { path: 'spot', select: '-_id' },
      { path: 'ownerEqpts' },
    ])
    .select('ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone');

  res.json({ ...status.GET_SUCCESS, data });
};

module.exports = decoratorCtrl(getAllProposal);
