'use strict';

/**
 * @ngdoc function
 * @name labApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labApp
 */
angular.module('labApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
