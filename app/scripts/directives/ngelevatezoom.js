'use strict';

/**
 * @ngdoc directive
 * @name abckidsworldApp.directive:ngElevateZoom
 * @description
 * # ngElevateZoom
 */
angular.module('abckidsworldApp')
  .directive('ngElevateZoom', function () {
    return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      //Will watch for changes on the attribute
      attrs.$observe('zoomImage',function(){
        element.removeData('zoom-image');
          linkElevateZoom();
      })
      
      function linkElevateZoom(){
        //Check if its not empty
        if (!attrs.zoomImage) return;
        element.attr('data-zoom-image',attrs.zoomImage);
        $(element).elevateZoom({
          scrollZoom : true,
          zoomWindowWidth:400,
          zoomWindowHeight:400
        });
      }
      element.on('$destroy', function() {
        $.removeData(attrs.zoomImage, 'elevateZoom');
        $('.zoomContainer').remove();
      });
      linkElevateZoom();

    }
  };
  });
