'use strict';

/**
 * @ngdoc function
 * @name abckidsworldApp.controller:AbckidsworldCategoryCtrl
 * @description
 * # AbckidsworldCategoryCtrl
 * Controller of the abckidsworldApp
 */
angular.module('abckidsworldApp')
  .controller('AbckidsworldCategoryCtrl', function ($scope,$rootScope,productService,$mdDialog) {
    $scope.details = {
    	name: ''
    };

    var g = Promise.resolve(productService.getCategories());
    g.then(function(val){
      $scope.categories = val;
    });

    $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Category Delete')
          .textContent('Would you like to delete your Category?')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Do It')
          .cancel('Cancel');

    $mdDialog.show(confirm).then(function() {
      productService.removeCategory($scope.clickedCategories,$scope.categories);
      var g = Promise.resolve(productService.getCategories());
    g.then(function(val){
      $scope.categories = val;
    });
    }, function() {
      alert("not done!!!!")
    });
  };

    $scope.details = productService.addCategory();
    $scope.saveCategory = function(){
    	$scope.details.$save().then(function(){
    		$scope.details = {
    			name: ''
    		}
    		$scope.details = productService.addCategory();
    	}).catch(function(error){
        alert("error");
      });
    }
  });
