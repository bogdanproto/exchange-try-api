const createPopulate = type => {
  switch (type) {
    case 'pending': {
      return [
        {
          path: 'ownerId',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        { path: 'spot' },
        { path: 'ownerEqpts', select: '_id title size' },
      ];
    }
    case 'reservation': {
      return [
        {
          path: 'ownerId',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        { path: 'spot' },
        { path: 'ownerEqpts', select: '_id title size' },
        {
          path: 'customerId',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        {
          path: 'customerEqpts',
          select: '_id title size',
        },
      ];
    }
    case 'cancelled': {
      return [
        {
          path: 'ownerId',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        { path: 'spot' },
        { path: 'ownerEqpts', select: '_id title size' },
        {
          path: 'customerId',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        {
          path: 'cancelUser',
          select: '_id name phone experience avatarCloudURL equipments',
        },
        {
          path: 'customerEqpts',
          select: '_id title size',
        },
      ];
    }
  }
};

module.exports = createPopulate;
