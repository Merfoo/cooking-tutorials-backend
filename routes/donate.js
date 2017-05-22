var stripe = require("stripe")(process.env.STRIPE_KEY);
var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  var charge = stripe.charges.create({
    amount: req.body["chargeAmount"],
    currency: "usd",
    description: "Donation to Cooking Tutorials",
    source: req.body.stripeToken
  }, function (error, charge) {
    res.json(error);
  });
});

module.exports = router;
