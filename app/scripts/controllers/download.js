'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:DownloadCtrl
 * @description
 * # DownloadCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('DownloadCtrl', function ($scope, productService) {
    $scope.detail = {
      name: "",
      phone: "",
      email: "",
      description: ""
    };

    $scope.loadDetails = function(){
      var p = Promise.resolve(productService.buyProduct());
      p.then(function(res){
        // $scope.detail.product = res.name;
      })
    }


    $scope.detail = productService.addContact();

    $scope.contactSubmit = function(){
      $('.download-button')[0].click();
      $scope.detail.$save().then(function(){
        $scope.detail = {
          name: "",
          phone: "",
          email: "",
          description: ""
        };
          $scope.detail = productService.addContact();
      }).catch(function(error){
        alert("error");
      });
    }
  });
