'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('MainCtrl', function ($scope,$firebaseArray, productService, $timeout) {
    var myTopProduct;
    var myNewProduct;
    $scope.getSliderImages = function(){
      var p = productService.getProducts().$loaded();
      p.then(function(data){
        myTopProduct = data.filter(function(val){
          return val.topProduct === "true";
        });
        myNewProduct = data.filter(function(val){
          return val.newProduct === "true";
        });
        $timeout(function() {
          $scope.topProducts = myTopProduct;
          $scope.newProducts = myNewProduct;
        }, 1);
      })
    }

  });
