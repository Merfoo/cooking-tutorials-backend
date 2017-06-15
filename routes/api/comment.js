const recaptcha = require("../../recaptcha");
const router = require("express").Router();

router.post("/", (req, res) => {
  recaptcha(req.body.recaptchaResponse).then(() => {
    res.json({ success: true });
  }, (err) => {
    res.json({ success: false, error: err });
  });
});

module.exports = router;
