var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

const data = require("./router/api/datas");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/data", data);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
