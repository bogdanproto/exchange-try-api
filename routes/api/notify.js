const express = require('express');
const { pathNotify } = require('../../consts');
const { authenticate, validateMongoId } = require('../../middlewares');
const ctrl = require('../../controllers/notify');

const router = express.Router();

router.get(pathNotify.BASE, authenticate, ctrl.getAllNotify);

router.patch(
  pathNotify.NOTIFY_STATUS,
  authenticate,
  validateMongoId,
  ctrl.updateStatusNotify
);

module.exports = router;
