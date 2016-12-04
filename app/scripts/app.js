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
    'ngMaterial',
    'slick'
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
      .when('/abckidsworld/remove', {
        templateUrl: 'views/remove.html',
        controller: 'RemoveCtrl',
        controllerAs: 'remove'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/viewproduct/:id', {
        templateUrl: 'views/viewproduct.html',
        controller: 'ViewproductCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
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
