const express = require('express');
const ctrl = require('../../controllers/user');
const {
  validateBody,
  authenticate,
  upload,
  validateMongoId,
} = require('../../middlewares');
const {
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
  joiUpdateEqptSchema,
} = require('../../schema/users');
const { pathUsers } = require('../../consts');

const router = express.Router();

router.post(pathUsers.REGISTER, validateBody(joiRegisterSchema), ctrl.register);

router.post(pathUsers.LOGIN, validateBody(joiLoginSchema), ctrl.login);

router.post(pathUsers.LOGOUT, authenticate, ctrl.logout);

router.get(pathUsers.CURRENT, authenticate, ctrl.getCurrent);

router.patch(
  pathUsers.AVATAR,
  authenticate,
  upload.single('avatar'),
  ctrl.updateAvatar
);

router.patch(
  pathUsers.PROFILE,
  authenticate,
  validateBody(joiUpdateUserSchema),
  ctrl.updateProfile
);

router.patch(
  pathUsers.EQPTS,
  authenticate,
  validateBody(joiUpdateEqptSchema),
  ctrl.updateEqpts
);

router.delete(
  pathUsers.EQPTS_ID,
  authenticate,
  validateMongoId,
  ctrl.deleteEqpt
);

module.exports = router;
