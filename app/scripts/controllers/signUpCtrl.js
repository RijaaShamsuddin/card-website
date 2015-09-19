'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */
angular.module('muocApp')
  .controller('signUpCtrl', function ($scope, $http, $location)
  { $scope.message

    $scope.data = {
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      password: '',
      confirmPassword:''
    }

    $scope.signUp = function() {
      if ($scope.data.password != $scope.data.confirmPassword)
      {
        $scope.message = 'Passwords do not match';

      }

     else
      {
        $scope.message = '';
        $http.post('/user', $scope.data)
          .success(function (user) {
            console.log('User created')
            $location.path('/')

          })
          .error(function (err) {
            console.log('Error')
            $scope.message = 'User already exists with email';
          });

      }

    }
  });
