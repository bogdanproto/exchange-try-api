const createProposal = require('./createProposal');
const getAllProposalPending = require('./getAllProposalPending');
const updateProposalToCustomer = require('./updateProposalToCustomer');
const updateProposalToOwner = require('./updateProposalToOwner');
const deleteProposal = require('./deleteProposal');
const getAllProposalReservation = require('./getAllProposalReservation');

module.exports = {
  createProposal,
  getAllProposalPending,
  getAllProposalReservation,
  updateProposalToCustomer,
  updateProposalToOwner,
  deleteProposal,
};
