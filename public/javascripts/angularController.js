var app= angular.module('restaurantsDemo',['ngAnimate']);
app.controller('showRestaurants',function($scope,$http,$interval){
	
	$scope.Restaurants= [];
	var i=1;
	var j=0;



	var getEachRestaurant=function (){
		var responseRestaurant=$http.get("/restaurants",{
                params:{restaurantNo: i}})
														.success(function(data, status, headers, config){
																										console.log(data[0].name);
																										
																										//$scope.Restaurants.push(data);
																										$scope.Restaurants.splice(0, 0, data);
																										//$scope.Restaurants[j]=data;
																										i++;
																										j++;
																										if(j==20){
																											j=0;
																										}
																										}
																);

								
								//i++;
								}

	$scope.getRestaurants=function(){
		$interval(getEachRestaurant,1000,100);
		};
	


	
			





});