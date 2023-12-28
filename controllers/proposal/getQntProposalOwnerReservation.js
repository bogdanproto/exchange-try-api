const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Proposal } = require('../../models');

const getQntProposalOwnerReservation = async (req, res) => {
  const { _id: ownerId } = req.user;

  const data = await Proposal.find({
    isAccepted: 'reservation',
    ownerId,
  });

  res.json({ ...status.GET_SUCCESS, data: data.length });
};

module.exports = decoratorCtrl(getQntProposalOwnerReservation);
