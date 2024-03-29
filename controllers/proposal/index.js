const createProposal = require('./createProposal');
const getAllProposalPending = require('./getAllProposalPending');
const updateProposalToCustomer = require('./updateProposalToCustomer');
const updateProposalToOwner = require('./updateProposalToOwner');
const deleteProposal = require('./deleteProposal');
const getAllProposalByStatus = require('./getAllProposalByStatus');
const getQntProposalOwnerReservation = require('./getQntProposalOwnerReservation');
const removeCustomerOffer = require('./removeCustomerOffer');
const updateProposalStatus = require('./updateProposalStatus');
const cancelProposal = require('./cancelProposal');
const gelAllHistoryProposals = require('./gelAllHistoryProposals');

module.exports = {
  createProposal,
  getAllProposalPending,
  getAllProposalByStatus,
  getQntProposalOwnerReservation,
  updateProposalToCustomer,
  updateProposalToOwner,
  deleteProposal,
  removeCustomerOffer,
  updateProposalStatus,
  cancelProposal,
  gelAllHistoryProposals,
};
