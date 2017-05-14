var mailer = require("../emailer");
var express = require("express");
var request = require("request");
var router = express.Router();

var headers = {
  "User-Agent": "Super Agent/0.0.1",
  "Content-Type": "application/x-www-forum-urlencoded"
};

router.post("/", (req, res) => {
  request({
    url: "https://www.google.com/recaptcha/api/siteverify",
    method: "POST",
    headers: headers,
    json: true,
    form: { 
      "secret": process.env.RECAPTCHA_SECRET_KEY,
      "response": req.body["g-recaptcha-response"]
    }
  }, (error, response, body) => {
    if (body.success) {
      mailer(req.body["email"], process.env.EMAIL_USERNAME, req.body["name"], req.body["content"]);
      res.json({ "success": true });
    }

    else {
      res.json({ "success": false });
    }
  });
});

module.exports = router;
