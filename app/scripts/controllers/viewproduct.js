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
      console.log($scope.detail);
      var image = val.imageUrl;
      $scope.smallImage = image.substring(0,52)+ 'w_450,h_400/'+image.substring(52);
      assignProductImage(val);
    })
    function assignProductImage(val){
      if(val.productImage1){
        $scope.smallProductImage1 = val.productImage1.substring(0,52)+ 'w_450,h_400/'+ val.productImage1.substring(52);
      }
      if(val.productImage2){
        $scope.smallProductImage2 = val.productImage2.substring(0,52)+ 'w_450,h_400/'+ val.productImage2.substring(52);
      }
      if(val.productImage3){
        $scope.smallProductImage3 = val.productImage3.substring(0,52)+ 'w_450,h_400/'+ val.productImage3.substring(52);
      }
      if(val.productImage4){
        $scope.smallProductImage4 = val.productImage4.substring(0,52)+ 'w_450,h_400/'+ val.productImage4.substring(52); 
      }
      if(val.productImage5){
        $scope.smallProductImage5 = val.productImage5.substring(0,52)+ 'w_450,h_400/'+ val.productImage5.substring(52);
      }
    }
    
    $scope.changeProductImage = function(data){
      if(data === 1){
        var changeImage = $scope.smallImage;
        $scope.smallImage = $scope.smallProductImage1;
        $scope.imageUrl = $scope.smallProductImage1;
        $scope.smallProductImage1 = changeImage;
      }
      if(data === 2){
        var changeImage = $scope.smallImage;
        $scope.smallImage = $scope.smallProductImage2;
        $scope.imageUrl = $scope.smallProductImage2;
        $scope.smallProductImage2 = changeImage;
      }
      if(data === 3){
        var changeImage = $scope.smallImage;
        $scope.smallImage = $scope.smallProductImage3;
        $scope.imageUrl = $scope.smallProductImage3;
        $scope.smallProductImage3 = changeImage;
      }
      if(data === 4){
        var changeImage = $scope.smallImage;
        $scope.smallImage = $scope.smallProductImage4;
        $scope.imageUrl = $scope.smallProductImage4;
        $scope.smallProductImage4 = changeImage;
      }
      if(data === 5){
        var changeImage = $scope.smallImage;
        $scope.smallImage = $scope.smallProductImage5;
        $scope.imageUrl = $scope.smallProductImage5;
        $scope.smallProductImage5 = changeImage;
      }
    }

    $scope.buyProduct = function(id){
      productService.sendProductDetail(id);
      $location.url("contact");
    }

  });
