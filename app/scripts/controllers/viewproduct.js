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
      console.log(val);
      $scope.detail = val;
      var image = val.imageUrl;
      $scope.smallImage = image.substring(0,52)+ 'w_450,h_400/'+image.substring(52);
      $scope.smallProductImage1 = $scope.detail.productImage1.substring(0,52)+ 'w_450,h_400/'+ $scope.detail.productImage1.substring(52);
      $scope.smallProductImage2 = $scope.detail.productImage2.substring(0,52)+ 'w_450,h_400/'+ $scope.detail.productImage2.substring(52);
      $scope.smallProductImage3 = $scope.detail.productImage3.substring(0,52)+ 'w_450,h_400/'+ $scope.detail.productImage3.substring(52);
      $scope.smallProductImage4 = $scope.detail.productImage4.substring(0,52)+ 'w_450,h_400/'+ $scope.detail.productImage4.substring(52);
      $scope.smallProductImage5 = $scope.detail.productImage5.substring(0,52)+ 'w_450,h_400/'+ $scope.detail.productImage5.substring(52);
    })
    
    $scope.changeProductImage = function(data){
      var changeImage = $scope.smallImage;
      $scope.smallImage = data;
      data = changeImage;
    }

    $scope.buyProduct = function(id){
      productService.sendProductDetail(id);
      $location.url("contact");
    }

  });
