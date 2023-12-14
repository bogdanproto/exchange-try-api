const express = require('express');
const ctrl = require('../../controllers/eqpt');
const { pathEqpt } = require('../../consts');
const { authenticate, validateBody } = require('../../middlewares');
const { joiEqptCreateSchema } = require('../../schema/equipment');

const router = express.Router();

router.get(pathEqpt.BASE, authenticate, ctrl.getEqpts);
router.post(
  pathEqpt.BASE,
  authenticate,
  validateBody(joiEqptCreateSchema),
  ctrl.createEqpt
);

module.exports = router;
