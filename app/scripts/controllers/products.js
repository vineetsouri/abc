'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('ProductsCtrl', function ($scope, productService, $location, $routeParams) {
    var products = productService.getProducts().$loaded();
    products.then(function(data){
      $scope.myProducts = data;
      $scope.categoryProducts = $scope.myProducts.filter(function(value){
        return value.myCategories === category_id;
      });
    });
    $scope.viewProduct = function(id){
      $location.url('/viewproduct/'+id);
    };

      var p = productService.getCategories().$loaded();

      p.then(function(data){
        $scope.allCategories = data;
      });

      var category_id = $routeParams.id;
  });
