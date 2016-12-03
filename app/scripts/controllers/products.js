'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('ProductsCtrl', function ($scope, productService) {
    $scope.loaded = true;
    var products = productService.getProducts().$loaded();
    products.then(function(data){
      $scope.myProducts = data;
    });
    $scope.viewProduct = function(id){
      $location.url('/viewproduct/'+id);
    };

    $scope.getCategories = function(){
      var p = productService.getCategories().$loaded();

      p.then(function(data){
        $scope.allCategories = data;
      });
    }

    $scope.categoryClicked = function(category_id){
      $scope.loaded = false;
      $scope.categoryProducts = $scope.myProducts.filter(function(value){
        return value.myCategories === category_id;
      });
    };
  });
