const pathUsers = require('./path/pathUsers');
const pathSports = require('./path/pathSports');
const pathSpots = require('./path/pathSpots');
const pathEqpt = require('./path/pathEqpt');
const pathProposal = require('./path/pathProposal');
const pathNotify = require('./path/pathNotify');
const status = require('./statuses');
const collectionDB = require('./collection');
const {
  TemplateNotify,
  typeNotify,
  statusNotify,
} = require('./notification/templateNotify');

module.exports = {
  pathUsers,
  pathSports,
  pathSpots,
  pathEqpt,
  pathProposal,
  pathNotify,
  status,
  collectionDB,
  TemplateNotify,
  typeNotify,
  statusNotify,
};
