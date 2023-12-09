const mongooseUserShema = require('./mongooseUsers');
const {
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
} = require('./joiUsers');

module.exports = {
  mongooseUserShema,
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
};
