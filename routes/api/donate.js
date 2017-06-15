const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = require("express").Router();

router.post("/", (req, res) => {
  stripe.charges.create({
    amount: req.body["chargeAmount"],
    currency: "usd",
    description: "Donation to Cooking Tutorials",
    receipt_email: req.body.email,
    source: req.body.stripeToken
  }, function (error) {
    res.json(error);
  });
});

module.exports = router;
