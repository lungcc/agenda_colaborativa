// console.log('opa');

(function(){


	$.ajax({
		url: 'http://localhost:8080/api/eventos'
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
