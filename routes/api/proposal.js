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
} = require('../../schema/proposals');

const router = express.Router();

router.get(pathProposal.BASE, authenticate, ctrl.getAllProposalPending);

router.get(
  pathProposal.RESERVATION,
  authenticate,
  ctrl.getAllProposalReservation
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
  pathProposal.ID,
  authenticate,
  validateMongoId,
  validateBody(joiProposalCustomerUpdShema),
  ctrl.updateProposalToCustomer
);

router.patch(
  pathProposal.OWNER_UPD,
  authenticate,
  validateMongoId,
  validateBody(joiProposalOwnerCreateShema),
  ctrl.updateProposalToOwner
);

router.delete(
  pathProposal.ID,
  authenticate,
  validateMongoId,
  ctrl.deleteProposal
);

module.exports = router;
