var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = (from, to, subject, text) => {
  var mailOptions = {
    from: from,
    to: to,
    subject: `${from}: ${subject}`,
    text: text    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log("Message %s send: %s", info.messageId, info.response);
  });
}
