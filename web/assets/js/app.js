(function(){
	var app = angular.module('store', []);	

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1

		this.selectTab = function(setTab) {
			this.tab = s
		}


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
