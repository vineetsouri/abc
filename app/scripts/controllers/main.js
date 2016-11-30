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
    var topProduct;

    $scope.getSliderImages = function(){
      var p = productService.getProducts().$loaded();
      p.then(function(data){
        topProduct = data.filter(function(val){
          return val.topProduct === "true";
        });
        $timeout(function() {
          $scope.topProducts = topProduct;
        }, 1);
      })
    }

  });
