const express = require('express');
const ctrl = require('../../controllers/eqpt');
const { pathEqpt } = require('../../consts');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get(pathEqpt.BASE, authenticate, ctrl.getEqpts);

module.exports = router;
