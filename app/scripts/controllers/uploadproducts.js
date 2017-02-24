'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:UploadproductsCtrl
 * @description
 * # UploadproductsCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('UploadproductsCtrl', function ($scope, $rootScope, $routeParams, $location, Upload, cloudinary, productService) {
    $scope.categories = productService.getCategories();
    $scope.checkImage = true;

    $scope.uploadFiles = function(files,image,checkImage,imageId){
      $scope.files = files;
      if (!$scope.files) {return}
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              file: file
            }
          }).success(function (data, status, headers, config) {
            image = data.url;
            imageId = data.public_id;
            checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
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
      topProductImage:'',
      newProductImage:'',
      topProduct: 'false',
      newProduct: 'false'
    };

    $scope.uploadProduct = function(file){
      $scope.uploadFiles(file,$scope.details.imageUrl,$scope.checkImage,$scope.details.image_publicId);
    }

    $scope.uploadTopProduct = function(file){
      $scope.uploadFiles(file,$scope.details.topProductImage,$scope.checkImage);
    }

    $scope.uploadNewProduct = function(file){
      $scope.uploadFiles(file,$scope.details.newProductImage,$scope.checkImage);
    }

    $scope.details = productService.product();
    $scope.updateProduct = function(){
      $scope.details.$save().then(function(){
        $scope.details = {
          name: '',
          description: '',
          price: '',
          myCategories: '',
          imageUrl: '',
          image_publicId: '',
          product_code:'',
          dimensions:'',
          topProductImage:'',
          newProductImage:'',
          topProduct: 'false',
          newProduct: 'false'
        };
        $scope.checkImage = true;
        $scope.details = productService.product();
      }).catch(function(error){
        alert("error");
      });
    };

  });
