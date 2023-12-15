const express = require('express');
const ctrl = require('../../controllers/eqpt');
const { pathEqpt } = require('../../consts');
const {
  authenticate,
  validateBody,
  validateMongoId,
} = require('../../middlewares');
const { joiEqptCreateSchema } = require('../../schema/equipment');

const router = express.Router();

router.get(pathEqpt.BASE, authenticate, ctrl.getEqpts);

router.post(
  pathEqpt.BASE,
  authenticate,
  validateBody(joiEqptCreateSchema),
  ctrl.createEqpt
);

router.delete(pathEqpt.ID, authenticate, validateMongoId, ctrl.deleteEqpt);

module.exports = router;
