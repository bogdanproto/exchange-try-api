const pathProposal = {
  ROOT: '/api/proposals',
  BASE: '/',
  RESERVATION: '/reservation',
  RESERVATION_OWNER: '/reservation/owner',
  ID: '/:id',
  OWNER_UPD: '/update/:id',
};

Object.freeze(pathProposal);

module.exports = pathProposal;
