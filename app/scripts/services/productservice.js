'use strict';

/**
 * @ngdoc service
 * @name abckidsworldApp.productService
 * @description
 * # productService
 * Service in the abckidsworldApp.
 */
angular.module('abckidsworldApp')
  .service('productService', productService);

  productService.$inject = ['$firebaseObject', '$firebaseArray', '$q'];

  function productService($firebaseObject, $firebaseArray, $q){
    var service = {
      product: product,
      getCategories: getCategories,
      getProducts: getProducts,
      removeProducts: removeProducts,
      getProductById: getProductById,
      getNewProducts: getNewProducts
    }

    return service;

    function product(){
      var ref = firebase.database().ref("products").push();

      return $firebaseObject(ref);
    }

    function getCategories(){
      var ref = firebase.database().ref().child("categories");

      return $firebaseArray(ref);
    }

    function getProducts(){
      var ref = firebase.database().ref().child("products");

      return $firebaseArray(ref);
    }

    // function getTopProducts(){
    //   var topProductList = [];
    //   var deferred = $q.defer();
    //   var ref = firebase.database().ref('products');
    //   ref.orderByChild("topProduct").equalTo("true").on("child_added", function(snapshot) {
    //       topProductList.push(snapshot.val());
    //   });
    //   if(topProductList){
    //     deferred.resolve(topProductList);
    //   }
    //   deferred.reject("empty");
    //   console.log(deferred.promise);
    //   return deferred.promise;
    // }

    function getNewProducts(){
      var ref = firebase.database().ref().child("products");

      return $firebaseArray(ref);
    }

    function getProductById(key){
      var ref = firebase.database().ref().child("products").child(key);
      return $firebaseObject(ref);
    }

    function removeProducts(productId, product){
      product.$remove(product.$indexFor(productId));
    }
  }
