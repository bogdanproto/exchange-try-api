const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { pathUsers } = require("../consts");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerifyEmail = async ({ email, verificationToken }) => {
  const msg = {
    to: email,
    from: "maxalter49@gmail.com",
    subject: "Verification email for ContactsBook",
    html: `<strong>Please to verificate your email by</strong> <a target="_blank" href = "${pathUsers.SERVER}/users/verify/${verificationToken}">link</a>`,
  };

  await sgMail.send(msg);
};

module.exports = sendVerifyEmail;
