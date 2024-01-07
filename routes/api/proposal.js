const express = require('express');
const ctrl = require('../../controllers/proposal');
const { pathProposal } = require('../../consts');
const {
  validateBody,
  authenticate,
  validateMongoId,
} = require('../../middlewares');
const {
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
} = require('../../schema/proposals');

const router = express.Router();

router.get(pathProposal.BASE, authenticate, ctrl.getAllProposalPending);

router.get(
  pathProposal.STATUS_PROPOSAL,
  authenticate,
  ctrl.getAllProposalByStatus
);

router.get(
  pathProposal.RESERVATION_OWNER,
  authenticate,
  ctrl.getQntProposalOwnerReservation
);

router.post(
  pathProposal.BASE,
  authenticate,
  validateBody(joiProposalOwnerCreateShema),
  ctrl.createProposal
);

router.patch(
  pathProposal.CUSTOMER_UPD,
  authenticate,
  validateMongoId,
  validateBody(joiProposalCustomerUpdShema),
  ctrl.updateProposalToCustomer
);

router.patch(
  pathProposal.CUSTOMER_REMOVE_OFFER,
  authenticate,
  validateMongoId,
  ctrl.removeCustomerOffer
);

router.patch(
  pathProposal.OWNER_UPD,
  authenticate,
  validateMongoId,
  validateBody(joiProposalOwnerCreateShema),
  ctrl.updateProposalToOwner
);

router.patch(
  pathProposal.OWNER_UPD_STATUS,
  authenticate,
  validateMongoId,
  validateBody(joiProposalAcceptShema),
  ctrl.updateProposalStatus
);

router.delete(
  pathProposal.ID,
  authenticate,
  validateMongoId,
  ctrl.deleteProposal
);

module.exports = router;
