var express = require('express');
var router = express.Router();
db = require('monk')(process.env.MONGOLAB_URI)
var cars = db.get('cars')

router.get('/', function(req, res) {
  cars.find({}, function(err,cars){
    if (err) {
     res.send(err);
   }
   res.status(200).json(cars);
 })
});


module.exports = router
