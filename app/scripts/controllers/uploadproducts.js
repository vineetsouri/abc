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
      newProduct: 'false',
      productImage1: '',
      productImage2: '',
      productImage3: '',
      productImage4: '',
      productImage5: ''
    };

    $scope.uploadOtherProducts1 = function(files){
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
            $scope.details.productImage1 = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }
    $scope.uploadOtherProducts2 = function(files){
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
            $scope.details.productImage2 = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }
    $scope.uploadOtherProducts3 = function(files){
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
            $scope.details.productImage3 = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }
    $scope.uploadOtherProducts4 = function(files){
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
    $scope.uploadOtherProducts5 = function(files){
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
            $scope.details.productImage4 = data.url;
            $scope.checkImage = false;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    }

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
            $scope.details.productImage5 = data.url;
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
          newProduct: 'false',
          productImage1: '',
          productImage2: '',
          productImage3: '',
          productImage4: '',
          productImage5: ''
        };
        $scope.checkImage = true;
        $scope.details = productService.product();
      }).catch(function(error){
        alert("error");
      });
    };

  });
