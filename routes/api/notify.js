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

router.patch(
  pathNotify.NOTIFY_ALL_STATUS,
  authenticate,
  ctrl.updateStatusAllNotify
);

module.exports = router;
