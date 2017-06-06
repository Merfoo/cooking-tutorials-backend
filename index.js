require("dotenv").config();

var express = require("express")
var history = require("connect-history-api-fallback");
var app = express();
var bodyParser = require("body-parser");
var contact = require("./routes/contact");
var donate = require("./routes/donate");

app.use(history());
app.use("/", express.static("../cooking-tutorials/dist"));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/contact", contact);
app.use("/donate", donate);

app.listen(8080, () => {
  console.log("Listening on 8080");
});
