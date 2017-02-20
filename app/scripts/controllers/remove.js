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
    $scope.clickedCategories = "";
    $scope.listProducts = [];
    var g = Promise.resolve(productService.getCategories());
    g.then(function(val){
      $scope.categories = val;
    })
    var p = Promise.resolve(productService.getProducts());
    p.then(function(val){
      $scope.products = val;
    })

    $scope.categoryChange = function(value){
      $scope.listProducts = [];
      $scope.products.forEach(function(product){

        if(product.myCategories == value){
          $scope.listProducts.push(product);
          $scope.details = {};
          $scope.details.imageUrl = "";
        }
      });
    }

    $scope.productChange = function(){
      $scope.details = {};
      $scope.listProducts.forEach(function(value){
        if($scope.clickedProduct == value.$id){
          $scope.details = value;
        }
      });
    };

    $scope.details = {
      name: '',
      description: '',
      price: '',
      myCategories: '',
      imageUrl: '',
      image_publicId: '',
      product_code:'',
      dimensions:'',
      topProduct: 'false',
      newProduct: 'false'
    }

    $scope.updateProduct = function(){
     var getProducts = productService.getProductById($scope.clickedProduct);
     var p = Promise.resolve(getProducts);
     p.then(function(data){
        data.name = $scope.details.name;
        data.description = $scope.details.description || "";
        data.price = $scope.details.price;
        data.topProduct = $scope.details.topProduct;
        data.newProduct = $scope.details.newProduct;
        data.$save().then(function(val){
          $scope.details = {};
        }, function(error){
          console.log(error)
        })
     });
    }

    $scope.deleteImage = function(){
      var p = Promise.resolve(productService.getProducts());
      var myProducts;
      p.then(function(v){
        myProducts = v;
        productService.removeProducts($scope.clickedProduct, myProducts)
      })
    }
  });
