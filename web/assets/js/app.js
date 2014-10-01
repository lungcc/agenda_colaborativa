(function(){
	var app = angular.module('store', ['flow']).config(['flowFactoryProvider', function(flowFactoryProvider){
		flowFactoryProvider.on('catchAll', function(event){
			console.log('catchAll', arguments);
		});
	}]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pedidilari',
			price: 3.75,
			description: '. . .',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pedidilari',
			price: 3.75,
			description: '. . .',
			canPurchase: true,
			soldOut: false
		}
	];

})();
