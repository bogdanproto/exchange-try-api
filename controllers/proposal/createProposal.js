const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Proposal } = require('../../models');

const createProposal = async (req, res) => {
  const ownerProposal = req.body;
  const { _id } = req.user;

  const proposal = {
    ...ownerProposal,
    ownerId: _id,
    ownerEqpts: ownerProposal.ownerEqpts.map(eqpt => eqpt._id),
    spot: ownerProposal.spot._id,
  };

  const data = await Proposal.create(proposal);

  res.json({ ...status.CREATED, data });
};

module.exports = decoratorCtrl(createProposal);
