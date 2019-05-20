const express = require("express");
const router = express.Router();

//Load Data Model
const Data = require("../../models/data");
console.log(Data);

router.get("/", (req, res) =>
  res.json({
    msg: "data Works"
  })
);

router.post("/data", (req, res) => {
  var dataAQI = new Data({
    id: req.body.id,
    AQI: req.body.AQI,
    subject: req.body.subject,
    name: req.body.name
  });
  dataAQI
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

router.get("/data", (req, res) => {
  Data.find(function(err, Data) {
    if (err) {
      res.send(err);
    }
    res.json(Data);
  });
});

router.get("/data/:id", (req, res) => {
  Data.findOne({ _id: req.params.id }, (err, Data) => {
    if (err) {
      res.send(err);
    }
    res.json(Data);
  });
});

module.exports = router;
