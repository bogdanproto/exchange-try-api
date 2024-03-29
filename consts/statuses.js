const status = {
  PUT_SUCCESS: { status: 200, message: 'Updated success' },
  MISSING_DATA: { status: 400, message: 'Bad Request' },

  NOT_FOUND: { status: 404, message: 'Not Found' },

  // ============Mongoose================================
  BAD_DATA_MONGOOSE: {
    status: 400,
    code: 'bad_data_moongoose',
    message: 'Bad Request',
  },
  BAD_ID_MONGOOSE: {
    status: 400,
    code: 'bad_id_moongoose',
    message: 'Bad Request',
  },

  // ============Notifys================================

  // ============Proposals================================

  PROPOSAL_RESERVATION: {
    status: 400,
    code: 'proposal_reservation_cant_change',
    message: 'Proposal cant be changed in status reservation ',
  },
  PROPOSAL_ONLY_RESERVATION: {
    status: 400,
    code: 'proposal_reservation_only',
    message: 'Proposal can be changed in status reservation only',
  },
  PROPOSAL_ACCEPTED: {
    status: 400,
    code: 'proposal_can_change_only_accepted',
    message: 'Proposal can be changed only in status accepted',
  },
  PROPOSAL_STATUS: {
    status: 400,
    code: 'status_doesnt_exist',
    message: 'Proposal doesnt have specified status ',
  },

  PROPOSAL_EQPTS: {
    status: 400,
    code: 'proposal_reservation_accepted_has_eqpt',
    message:
      'Proposal with status reservation or accepted has this equipment please cancel proposal and after delete equipment',
  },

  // ==================================================
  GET_SUCCESS: { status: 200, code: 'ok', message: 'OK' },

  DELETE_SUCCESS: {
    status: 200,
    code: 'deleted_ok',
    message: 'Deleted success',
  },
  CREATED: { status: 201, code: 'created', message: 'Created' },
  UPDATE_SUCCESS: {
    status: 200,
    code: 'data_update_success',
    message: 'Updated success',
  },

  BAD_ID: { status: 400, code: 'bad_id', message: 'Id is not valid' },

  NOT_MATCH_ID: {
    status: 404,
    code: 'owner_doesnt_have_id',
    message: 'Owner doesnt have id',
  },

  NOT_FOUND_ID: { status: 404, code: 'not_found_id', message: 'Not Found Id' },

  BAD_DATA: { status: 400, code: 'bad_data', message: 'Bad Request' },

  BAD_PARAMS: {
    status: 400,
    code: 'bad_params',
    message: 'Params is wrong or has wrong type',
  },

  UNSUPPORTED_TYPE: {
    status: 415,
    code: 'unsupported_media_type',
    message: 'Unsupported Media Type',
  },

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
  USER_UNAUTHORIZED_OPERATION: {
    status: 401,
    code: 'user_unauthorized_for_operation',
    message: 'User is unauthorized for this operation',
  },
  USER_CONFLICT: {
    status: 409,
    code: 'user_already_exist',
    message: 'Email already exists',
  },
};

Object.freeze(status);

module.exports = status;
