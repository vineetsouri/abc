'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('MainCtrl', function ($scope,$firebaseArray) {
    var ref = firebase.database().ref().child("categories");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.messages = $firebaseArray(ref);
  });
