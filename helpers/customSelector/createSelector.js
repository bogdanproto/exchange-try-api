const createSelector = type => {
  switch (type) {
    case 'pending': {
      return 'ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone statusProposal createdAt updatedAt';
    }
    case 'reservation': {
      return 'ownerEqpts ownerDate ownerTime ownerMsg isAutoAccept isShowPhone statusProposal customerTime customerMsg createdAt updatedAt';
    }
  }
};

module.exports = createSelector;
