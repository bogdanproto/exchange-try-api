const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  createPopulate,
  createSelector,
} = require('../../helpers');
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
    .populate(createPopulate('pending'))
    .select(createSelector('pending'))
    .lean();

  const data = proposalHandler([tempData]);

  res.json({ ...status.CREATED, data: data[0] });
};

module.exports = decoratorCtrl(createProposal);
