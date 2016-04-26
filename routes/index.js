var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

router.get('/', function(req, res, next) {
	//console.log("in index"+__dirname);
    res.render('index', { title: 'Express' });
});


router.get('/animateex', function(req, res, next) {
	//console.log("in index"+__dirname);
    res.render('animateexample', { title: 'Express' });
});




router.get('/restaurants', function(req, res, next) {
	console.log("request with restaurant no"+ req.query.restaurantNo)
  //Restaurant.findOne().exec(function(err, post)
  Restaurant.find({"restaurant_id":req.query.restaurantNo},function(err, restaurant){
    if(err){ return next(err); }
    console.log(restaurant[0].name+"==========");
    res.send(restaurant);
  });
});



module.exports = router;
