(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
	$scope.clima = {};

	$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0')
		.success(function(data){

			$scope.clima = data;

		});

		$scope.convertDate = function(unixTimestamp) {
            var date = new Date(unixTimestamp * 1000);
            return date;
        };

		$scope.convertKelvintoCelcius = function(kelvinTemp) {
            var tempCelsius = kelvinTemp - 273.15;
            return tempCelsius.toFixed(2);
        };

}]);





})();
