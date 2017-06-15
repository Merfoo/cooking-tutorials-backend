const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(history());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use("/", express.static("../cooking-tutorials/dist"));
router.use("/api", require("./api/index"));

module.exports = router;
