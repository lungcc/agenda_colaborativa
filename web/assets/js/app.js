// console.log('opa');

(function(){
  var app = angular.module('store', []);
  app.controller('EventosController', [ '$http', function($http){
    var eventos = this;
    eventos.item = [];

    $http({
      url : 'http://localhost:8080/api/eventos',
      method : "GET"
    }).then(function(response){
      eventos.item = response.data;
    });
  }]);
})();
