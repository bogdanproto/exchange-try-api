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
    case 'notify': {
      return [
        {
          path: 'initiator',
          select: '_id name',
        },
        {
          path: 'recipient',
          select: '_id name',
        },
        {
          path: 'source',
          select: '_id spot ownerDate ownerTime customerTime',
          populate: {
            path: 'spot',
            select: '_id spot',
          },
        },
      ];
    }
  }
};

module.exports = createPopulate;
