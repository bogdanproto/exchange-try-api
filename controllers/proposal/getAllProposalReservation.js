const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalReservation = async (req, res) => {
  const { _id: userId } = req.user;

  console.log(userId);

  const tempData = await Proposal.find({
    isAccepted: 'reservation',
    $or: [{ ownerId: userId }, { customerId: userId }],
  });

  res.json({ ...status.GET_SUCCESS, data: { ...tempData } });
};

module.exports = decoratorCtrl(getAllProposalReservation);
