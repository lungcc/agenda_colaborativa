console.log('opa');

(function(){

	var app = angular.module('store', []);

	app.controller('EventosController', [ '$http', function($http){
		var eventos = this;
		eventos.item = [];

		$http.get('./api/eventos').success(function(data){
			console.log(data);
			eventos.item = data;
		});
	}]); 

})();
