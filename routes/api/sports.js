const express = require('express');
const ctrl = require('../../controllers/sport');
const { pathSports } = require('../../consts');

const router = express.Router();

router.get(pathSports.BASE, ctrl.getSports);

module.exports = router;
