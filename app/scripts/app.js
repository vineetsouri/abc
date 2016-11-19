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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/abckidsworld/upload', {
        templateUrl: 'views/uploadproducts.html',
        controller: 'UploadproductsCtrl',
        controllerAs: 'uploadProducts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
