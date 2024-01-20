const express = require('express');
const { pathNotify } = require('../../consts');
const { authenticate } = require('../../middlewares');
const ctrl = require('../../controllers/notify');

const router = express.Router();

router.get(pathNotify.BASE, authenticate, ctrl.getAllNotify);

module.exports = router;
