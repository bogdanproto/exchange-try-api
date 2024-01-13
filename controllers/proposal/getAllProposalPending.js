const { status } = require('../../consts');
const {
  decoratorCtrl,
  proposalHandler,
  createPopulate,
  createSelector,
  createPagination,
  createFilter,
} = require('../../helpers');
const { Proposal } = require('../../models');

const getAllProposalPending = async (req, res) => {
  const { page, limit, date, spot } = req.query;

  const pagination = createPagination({ page, limit });
  const filterQuery = await createFilter({ date, spot });

  const tempData = await Proposal.find(
    {
      ...filterQuery,
      statusProposal: 'pending',
    },
    null,
    pagination
  )
    .sort({ updatedAt: -1 })
    .populate(createPopulate('pending'))
    .select(createSelector('pending'))
    .lean();

  const proposals = proposalHandler(tempData);

  const total = await Proposal.find({
    ...filterQuery,
    statusProposal: 'pending',
  }).countDocuments();

  res.json({
    ...status.GET_SUCCESS,
    data: {
      proposals,
      page,
      limit,
      total,
    },
  });
};

module.exports = decoratorCtrl(getAllProposalPending);
