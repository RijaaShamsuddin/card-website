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
        templateUrl: 'views/main_page.html'

      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/sign_up.html',
        controller: 'signUpCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });




  });


