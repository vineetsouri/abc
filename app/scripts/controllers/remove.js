'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:RemoveCtrl
 * @description
 * # RemoveCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('RemoveCtrl', function (productService, $scope, cloudinary) {
    $scope.categories = productService.getCategories();
    $scope.clickedCategories = "";
    $scope.listProducts = [];
    $scope.products = productService.getProducts();

    $scope.categoryChange = function(value){
      $scope.listProducts = [];
      $scope.products.forEach(function(product){

        if(product.myCategories == value){
          console.log(product);
          $scope.listProducts.push(product);
        }
      });
    }

    $scope.deleteImage = function(){
        var publicId = $scope.clickedProduct;
        console.log(publicId);
        console.log(cloudinary.uploader.destroy(publicId, function(result){console.log(result)}));
      //   cloudinary.api.delete_resources(publicId, function(result) {
      //   console.log(result);
      //    if(result.hasOwnProperty("error")){
      //        callback(result);
      //        return;
      //    }else{
      //         callback(result);

      //    }  
      // })
    }
  });
