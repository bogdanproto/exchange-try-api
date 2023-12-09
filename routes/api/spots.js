const express = require('express');
const ctrl = require('../../controllers/spot');
const { pathSpots } = require('../../consts');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get(pathSpots.BASE, authenticate, ctrl.getSpots);

module.exports = router;
