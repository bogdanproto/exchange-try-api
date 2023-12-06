const express = require("express");
const ctrl = require("../../controllers/user");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  joiUsersSchema,
  joiUsersSchemaSubscr,
  joiUsersSchemaVerify,
} = require("../../schema/users");
const { pathUsers } = require("../../consts");

const router = express.Router();

router.post(pathUsers.REGISTER, validateBody(joiUsersSchema), ctrl.register);

router.get(pathUsers.VERIFY_EMAIL, ctrl.verificateUser);

router.post(
  pathUsers.VERIFY,
  validateBody(joiUsersSchemaVerify),
  ctrl.updateVerificateUser
);

router.post(pathUsers.LOGIN, validateBody(joiUsersSchema), ctrl.login);

router.post(pathUsers.LOGOUT, authenticate, ctrl.logout);

router.get(pathUsers.CURRENT, authenticate, ctrl.getCurrent);

router.patch(
  pathUsers.USERS,
  authenticate,
  validateBody(joiUsersSchemaSubscr),
  ctrl.updateSubscription
);

router.patch(
  pathUsers.AVATAR,
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
