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
  .config(function ($routeProvider,$locationProvider) {
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
        controller: 'RemoveCtrl'
      })
      .when('/products/:id', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/viewproduct/:id', {
        templateUrl: 'views/viewproduct.html',
        controller: 'ViewproductCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode({
        enabled: true,
        // requireBase: false
      });
  })
  .config(['cloudinaryProvider', function (cloudinaryProvider) {
  cloudinaryProvider
      .set("cloud_name", "abckidsworld")
      .set("upload_preset", "abckidsworld");
  }]);
