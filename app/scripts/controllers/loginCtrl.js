'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */
angular.module('muocApp')
  .controller('LoginCtrl', function ($scope, $http, $location)
  {

    $scope.errorMessage = '';
    $scope.data = {
      email:'',
      password: ''
    }

    $scope.login = function() {

        $http.post('/login', $scope.data)
          .success(function (user) {
            $scope.errorMessage = '';
            localStorage.setItem('User', user);
            $location.path('/main_page')
          })
          .error(function (err) {
            $scope.errorMessage = 'Please enter valid email and password!!';
            $scope.data = {
              email:'',
              password: ''
            };
          });

      }
    $scope.user = localStorage.getItem('User');
    localStorage.removeItem('User');

  });
