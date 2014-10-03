// console.log('opa');

(function(){


	$.ajax({
		url: 'localhost:8080/api/eventos',
		type: 'GET',
		// contentType: 'application/json',
		dataType: 'jasonp',
		crossDomain: true
	}).done(function(data){
		console.log(data);
	});

	// var app = angular.module('store', []);

	// app.controller('EventosController', [ '$http', function($http){
	// 	var eventos = this;
	// 	eventos.item = [];

	// 	$http.get('localhost:8080/api/eventos').success(function(data){
	// 		console.log(data);
	// 		eventos.item = data;
	// 	});
	// }]); 

})();
