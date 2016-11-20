'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:UploadproductsCtrl
 * @description
 * # UploadproductsCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('UploadproductsCtrl', function ($scope, $rootScope, $routeParams, $location, Upload, cloudinary, $firebaseArray) {
    var ref = firebase.database().ref().child("categories");
    $scope.categories = $scope.messages = $firebaseArray(ref);
    $scope.uploadFiles = function(files){
      $scope.files = files;
      if (!$scope.files) return;
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: $scope.details.myCategories,
              file: file
            }
          }).success(function (data, status, headers, config) {
            // $rootScope.photos = $rootScope.photos || [];
            data.context = {custom: {photo: $scope.title}};
            file.result = data;
            $scope.details.imageUrl = file.result.url;
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    };

    $scope.details = {
      name: '',
      description: '',
      quantity: '',
      myCategories: '',
      imageUrl: ''
    }

    $scope.productSubmit = function(product){
      console.log(product);
    }

  });
