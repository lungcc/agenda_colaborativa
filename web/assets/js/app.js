// console.log('opa');

(function(){


	// $.ajax({
	// 	url: 'localhost:8080/api/eventos',
	// 	type: 'GET',
	// 	// contentType: 'application/json',
	// 	dataType: 'jasonp',
	// 	crossDomain: true
	// }).done(function(data){
	// 	console.log(data);
	// });

	var app = angular.module('store', []);

	app.controller('EventosController', [ '$http', function($http){
		var eventos = this;
		eventos.item = [];

		$http({
			url : 'http://localhost:8080/api/eventos',
			method : "GET"    
		}).then(function(response){
			eventos.item = response.data;
			console.log(eventos.item);
		});

	}]); 



	// myApp.controller("MyCtrl",['$scope','$http','$window',function($scope,$http,$window){  
	  
	//   $http({
	//     url : 'http://www.corsproxy.com/muslimsalat.com/dhaka/monthly.json',
	//     method : "GET"    
	//   }).then(function(response){
	//     $scope.data=response.data;
	//   });
	


})();
