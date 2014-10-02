(function(){

	var app = angular.module('store', []);

	app.controller('EventosController', [ '$http', function($http){
		var eventos = this;
		eventos.item = [];

		$http.get('localhost:8080/api/eventos').success(function(data){
			console.log(data);
			eventos.item = data;
		});
	}]); 

})();
