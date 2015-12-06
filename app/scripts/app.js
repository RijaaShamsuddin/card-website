'use strict';

/**
 * @ngdoc overview
 *
 * @name muocApp
 * @description
 * # muocApp
 *
 * Main module of the application.
 */
var app = angular
  .module('muocApp', [
    'angular-loading-bar',
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
        templateUrl: '../views/main_views/login.html',
        controller: 'LoginCtrl'

      })
      .when('/cards/:_id', {
        templateUrl: '../views/main_views/card.html',
        controller: 'cardCtrl'
      })
      .when('/main_page', {
        templateUrl: '../views/main_views/main_page.html',
        controller : 'main_pageCtrl'
      })
      .when('/signup', {
        templateUrl: '../views/main_views/sign_up.html',
        controller: 'signUpCtrl'
      })
      .when('/about', {
        templateUrl: '../views/main_views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/main_views/contact.html',
        controller: 'contactCtrl'
      })
      .when('/user_profile', {
        templateUrl: '../views/user_views/user_profile.html',
        controller: 'user_profileCtrl'
      })
      .when('/gallery/:category_name', {
        templateUrl: '../views/main_views/gallery.html',
        controller: 'galleryCtrl'
      })
      .when('/updateUser/:_id', {
        templateUrl: '../views/user_views/user_edit.html',
        controller: 'user_editCtrl'
      })
      .when('/order',{
        templateUrl: '../views/order_views/order_details.html',
        controller: 'orderCtrl'
      })
      .when('/cart',{
        templateUrl: '../views/order_views/cart.html',
        controller: 'cartCtrl'
      })
      .when('/orders/:user_id', {
        templateUrl: '../views/user_views/user_orders.html',
        controller: 'user_ordersCtrl'
      })

      .when('/checkout',{
        templateUrl:'../views/order_views/finish_shopping.html'
      })

        .when('/AdminPanel',{
          templateUrl:'../views/admin_views/AdminPanel.html',
          controller:'AdminPanelCtrl'
        }
    )
      .when('/admin_order',{
        templateUrl: '../views/admin_views/admin_order.html',
        controller: 'admin_orderCtrl'
      })

      .when('/admin_users',{
        templateUrl: '../views/admin_views/admin_users.html',
        controller: 'admin_usersCtrl'
      })
      .when('/admin_category',{
        templateUrl:'../views/admin_views/admin_category.html',
        controller:'admin_categoryCtrl'
      })
      .when('admin_card',{
        templateUrl:'../views/admin_views/admin_card.html',
        controller:'admin_cardCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });




  });


