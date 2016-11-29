'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('MainCtrl', function ($scope,$firebaseArray, productService) {
    $scope.getSliderImages = function(){
      var p = productService.getProducts().$loaded();
      p.then(function(data){
        $scope.topProducts = data.filter(function(val){
          console.log(val);
          return val.topProduct === "true";
        });
      })
    }
  });
