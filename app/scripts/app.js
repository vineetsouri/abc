'use strict';

/**
 * @ngdoc overview
 * @name abckidsworldApp
 * @description
 * # abckidsworldApp
 *
 * Main module of the application.
 */
angular
  .module('abckidsworldApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'cloudinary',,
    'ngFileUpload',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/abckidsworld/upload', {
        templateUrl: 'views/uploadproducts.html',
        controller: 'UploadproductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['cloudinaryProvider', function (cloudinaryProvider) {
  cloudinaryProvider
      .set("cloud_name", "rakeshschool")
      .set("upload_preset", "abckidsworld");
  }]);
