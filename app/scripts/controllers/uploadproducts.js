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

    $scope.uploadProduct = function(files){
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
            $scope.details.imageUrl = data.url;
            $scope.details.image_publicId = data.public_id;
            $scope.checkImage = false;
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

    $scope.uploadTopProduct = function(files){
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
            $scope.details.topProductImage = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }

    $scope.uploadNewProduct = function(files){
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
            $scope.details.newProductImage = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }

    $scope.CheckUploadImage = function(val){
      console.log(val);
      if(val == 'true'){
        $scope.checkImage = true;
      } else{
        $scope.checkImage = false;
      }
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
