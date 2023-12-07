const status = {
  GET_SUCCESS: { status: 200, message: 'OK' },
  DELETE_SUCCESS: { status: 200, message: 'Deleted success' },
  PUT_SUCCESS: { status: 200, message: 'Updated success' },
  CREATED: { status: 201, message: 'Created' },
  MISSING_DATA: { status: 400, message: 'Bad Request' },
  BAD_ID: { status: 400, message: 'Id is not valid' },
  BAD_PARAMS: { status: 400, message: 'Params is wrong or has wrong type' },
  NOT_FOUND: { status: 404, message: 'Not Found' },
  UNSUPPORTED_TYPE: { status: 415, message: 'Unsupported Media Type' },

  // ===============================================
  USER_LOGIN: {
    status: 200,
    code: 'user_login_success',
    message: 'User is logged in',
  },
  USER_CURRENT: {
    status: 200,
    code: 'user_authorized',
    message: 'User is authorized',
  },
  USER_LOGOUT: {
    status: 200,
    code: 'user_logout',
    message: 'User is logged out',
  },
  USER_UPDATE: {
    status: 200,
    code: 'user_update_success',
    message: 'Updated success',
  },

  USER_UNAUTHORIZED: {
    status: 401,
    code: 'user_unauthorized_by',
    message: 'Email or password is wrong',
  },
  USER_UNAUTHORIZEDTOKEN: {
    status: 401,
    code: 'user_unauthorized_token',
    message: 'User is not authorized',
  },
  USER_CONFLICT: {
    status: 409,
    code: 'user_already_exist',
    message: 'Email already exists',
  },
};

Object.freeze(status);

module.exports = status;
