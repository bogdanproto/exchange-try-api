const pathUsers = {
  SERVER: "http://localhost:3000",
  ROOT: "/users",
  USERS: "/",
  REGISTER: "/register",
  VERIFY: "/verify",
  VERIFY_EMAIL: "/verify/:verificationToken",
  LOGIN: "/login",
  LOGOUT: "/logout",
  CURRENT: "/current",
  AVATAR: "/avatars",
};

Object.freeze(pathUsers);

module.exports = pathUsers;
