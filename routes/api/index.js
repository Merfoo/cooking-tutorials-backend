const router = require("express").Router();

router.use("/contact-us", require("./contactUs"));
router.use("/donate", require("./donate"));
router.use("/comment", require("./comment"));

module.exports = router;
