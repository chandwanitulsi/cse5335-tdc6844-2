var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  address: {
	  building: Number,
	  coord : [Number],
	  street: String,
	  zipcode : Number
  },
  borough: String,
  cuisine: String,
  grades : [{
		date: Date,
		grade:String,
		Score : Number
			}],
  name : String,
  restaurant_id : String,
});

mongoose.model('Restaurant', RestaurantSchema);