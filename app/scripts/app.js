'use strict';

/**
 * @ngdoc overview
 * @name muocApp
 * @description
 * # muocApp
 *
 * Main module of the application.
 */
var app = angular
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
      .when('/cards/:_id', {
        templateUrl: 'views/card.html',
        controller: 'cardCtrl'
      })
      .when('/main_page', {
        templateUrl: 'views/main_page.html',
        controller : 'main_pageCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/sign_up.html',
        controller: 'signUpCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
      .when('/user_profile', {
        templateUrl: 'views/user_profile.html',
        controller: 'user_profileCtrl'
      })
      .when('/gallery/:category_id', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl'
      })
      .when('/updateUser/:_id', {
        templateUrl: 'views/user_edit.html',
        controller: 'user_editCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });




  });


