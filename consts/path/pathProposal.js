const pathProposal = {
  ROOT: '/api/proposals',
  BASE: '/',
  STATUS_PROPOSAL: '/:statusproposal',
  STATUS_HISTORY: '/all/history',
  RESERVATION_OWNER: '/reservation/owner',
  ID: '/:id',
  OWNER_UPD: '/update/:id/owner',
  OWNER_UPD_STATUS: '/status/:id',
  CUSTOMER_UPD: '/update/:id/customer',
  CUSTOMER_REMOVE_OFFER: '/remove/:id/customer',
  CANCEL_PROPOSAL: '/cancel/:id',
};

Object.freeze(pathProposal);

module.exports = pathProposal;
