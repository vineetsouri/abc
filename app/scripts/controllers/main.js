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
      productService.getTopProducts().then(function(res){
        console.log(res);
      })
    }
  });
