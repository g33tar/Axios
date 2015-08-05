var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({ make: "Bugatti", model: 'Veyron', year: "2010" });
});
 
module.exports = router
