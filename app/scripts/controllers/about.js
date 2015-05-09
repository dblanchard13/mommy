'use strict';

/**
 * @ngdoc function
 * @name mommyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mommyApp
 */
angular.module('mommyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
