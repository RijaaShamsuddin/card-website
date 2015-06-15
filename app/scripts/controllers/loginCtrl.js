'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */
angular.module('muocApp')
  .controller('LoginCtrl', function ($scope,$http)
  {
    $scope.data = {
      email:'',
      password: ''
    }

    $scope.login = function() {

        $http.get('/user/:username')
          .success(function (user) {
            console.log('User found')
            console.log(user)
          })
          .error(function (err) {
            console.log('Error')
          });

      }


  });
