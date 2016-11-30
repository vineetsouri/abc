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
    $scope.myProducts = productService.getProducts();

    $scope.getCategories = function(){
      var p = productService.getCategories().$loaded();

      p.then(function(data){
        $scope.allCategories = data;
      })
    }
  });
