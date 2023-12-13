const { model } = require('mongoose');
const { mongooseProposalSchema } = require('../schema/proposals');

const Proposal = model('proposal', mongooseProposalSchema);

module.exports = Proposal;
