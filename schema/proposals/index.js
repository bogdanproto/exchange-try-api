const {
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
} = require('./joiProposals');
const mongooseProposalSchema = require('./mongooseProposals');

module.exports = {
  mongooseProposalSchema,
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
};
