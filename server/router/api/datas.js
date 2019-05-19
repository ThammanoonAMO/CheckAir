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
  var dataAQI = new Data({ AQI: req.body.AQI });
  dataAQI
    .save()
    .then(user => res.json(user))
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

module.exports = router;
