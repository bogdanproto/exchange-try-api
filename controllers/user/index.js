const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verificateUser = require("./verificateUser");
const updateVerificateUser = require("./updateVerificateUser");

module.exports = {
  register,
  verificateUser,
  updateVerificateUser,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
};
