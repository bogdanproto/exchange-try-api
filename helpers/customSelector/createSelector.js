const createSelector = type => {
  switch (type) {
    case 'pending': {
      return 'ownerEqpts ownerDate ownerTime ownerMsg isShowPhone statusProposal createdAt updatedAt';
    }
    case 'reservation': {
      return 'ownerEqpts ownerDate ownerTime ownerMsg isShowPhone statusProposal customerTime customerMsg createdAt updatedAt';
    }
    case 'cancelled': {
      return 'ownerEqpts ownerDate ownerTime ownerMsg isShowPhone statusProposal customerTime customerMsg cancelMsg createdAt updatedAt';
    }
  }
};

module.exports = createSelector;
