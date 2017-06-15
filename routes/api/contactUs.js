const mailer = require("../../mailer");
const recaptcha = require("../../recaptcha");
const router = require("express").Router();

router.post("/", (req, res) => {
  recaptcha(req.body.recaptchaResponse).then(() => {
    mailer(
      req.body.email, 
      process.env.EMAIL_USERNAME, 
      `${req.body.email}: ${req.body.name}`, 
      req.body.content
    );

    res.json({ success: true });
  }, (err) => {
    res.json({ success: false, error: err });
  });
});

module.exports = router;
