var nodemailer = require("nodemailer");

const sendMail = (email, subject, text, callback) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "manavpaatel944@gmail.com",
      pass: "abcd@1234",
    },
  });
  var mailOptions = {
    from: email,
    to: "manavpatel944@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = sendMail;
