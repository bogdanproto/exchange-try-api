const proposalHandler = arr =>
  arr.map(item => {
    const tempOwner = { ...item.ownerId };
    if (!item.isShowPhone) {
      tempOwner.phone = null;
    }
    return { ...item, ownerId: tempOwner };
  });

module.exports = proposalHandler;
