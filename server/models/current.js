const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const CurrentSchema = new Schema({
  name: String,
  AQI: String
});
module.exports = Current = mongoose.model("current", CurrentSchema);
