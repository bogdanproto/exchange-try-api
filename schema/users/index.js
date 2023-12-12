const mongooseUserShema = require('./mongooseUsers');
const {
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
  joiUpdateEqptSchema,
} = require('./joiUsers');

module.exports = {
  mongooseUserShema,
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
  joiUpdateEqptSchema,
};
