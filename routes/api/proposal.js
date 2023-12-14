const express = require('express');
const ctrl = require('../../controllers/proposal');
const { pathProposal } = require('../../consts');
const { validateBody, authenticate } = require('../../middlewares');
const { joiProposalOwnerCreateShema } = require('../../schema/proposals');

const router = express.Router();

router.get(pathProposal.BASE, authenticate, ctrl.getAllProposal);

router.post(
  pathProposal.BASE,
  authenticate,
  validateBody(joiProposalOwnerCreateShema),
  ctrl.createProposal
);

module.exports = router;
