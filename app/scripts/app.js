'use strict';

/**
 * @ngdoc overview
 * @name muocApp
 * @description
 * # muocApp
 *
 * Main module of the application.
 */
angular
  .module('muocApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/sign_up.html',
        controller: 'signUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
