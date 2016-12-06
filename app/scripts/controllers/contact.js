'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('ContactCtrl', function ($scope, productService) {
    $scope.detail = {
      name: "",
      phone: "",
      email: "",
      description: ""
    };

    $scope.loadDetails = function(){
      var p = Promise.resolve(productService.buyProduct());
      p.then(function(res){
        console.log(res.name);
        $scope.detail.product = res.name;
        console.log($scope.detail.product);
      })
    }


    $scope.detail = productService.addContact();

    $scope.contactSubmit = function(){
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
