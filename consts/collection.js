const { Sport, User, Eqpt } = require('../models');

const collectionDB = {
  USERS: User,
  SPORTS: Sport,
  EQPTS: Eqpt,
};

Object.freeze(collectionDB);

module.exports = collectionDB;
