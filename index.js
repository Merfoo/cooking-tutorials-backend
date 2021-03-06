require("dotenv").config();

var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var contact = require("./routes/contact");
var donate = require("./routes/donate");

app.use("/", express.static("../cooking-tutorials/dist"));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/contact", contact);
app.use("/donate", donate);

app.listen(8080, () => {
  console.log("Listening on 8080");
});
