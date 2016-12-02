'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('ProductsCtrl', function ($scope, productService, $location) {
    $scope.myProducts = productService.getProducts();

    $scope.viewProduct = function(id){
      $location.url('/viewproduct/'+id);
    };

  });
