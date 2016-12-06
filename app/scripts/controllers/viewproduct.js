'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:ViewproductCtrl
 * @description
 * # ViewproductCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('ViewproductCtrl', function ($routeParams, productService, $scope, $location) {
    $scope.productId = $routeParams.id;

    // $scope.detail = {
    //   name: '',
    //   description: '',
    //   price: '',
    //   myCategories: '',
    //   imageUrl: ''
    // };

    var p = productService.getProductById($scope.productId).$loaded();
    p.then(function(val){
      $scope.detail = val;
      var image = val.imageUrl;
      console.log(image);
      $scope.smallImage = image.substring(0,52)+ 'w_450,h_400/'+image.substring(52);
    })
    
    $scope.buyProduct = function(id){
      productService.sendProductDetail(id);
      $location.url("contact");
    }

  });
