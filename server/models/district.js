const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create district schema
const DistrictSchema = new Schema({
  id: String,
  name: String,
  subject: String,
  AQI: String
});

module.exports = District = mongoose.model("districtName", DistrictSchema);
