const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const DataSchema = new Schema({
  AQI: String
});
module.exports = Data = mongoose.model("data", DataSchema);
