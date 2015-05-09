'use strict';

/**
 * @ngdoc overview
 * @name mommyApp
 * @description
 * # mommyApp
 *
 * Main module of the application.
 */
var app = angular.module('mommyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/love', {
        templateUrl: 'app/views/love.html',
        controller: 'LoveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('firebaseURL', 'https://mommysday.firebaseio.com')
