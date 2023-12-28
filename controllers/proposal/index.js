const createProposal = require('./createProposal');
const getAllProposalPending = require('./getAllProposalPending');
const updateProposalToCustomer = require('./updateProposalToCustomer');
const updateProposalToOwner = require('./updateProposalToOwner');
const deleteProposal = require('./deleteProposal');
const getAllProposalReservation = require('./getAllProposalReservation');
const getQntProposalOwnerReservation = require('./getQntProposalOwnerReservation');

module.exports = {
  createProposal,
  getAllProposalPending,
  getAllProposalReservation,
  getQntProposalOwnerReservation,
  updateProposalToCustomer,
  updateProposalToOwner,
  deleteProposal,
};
