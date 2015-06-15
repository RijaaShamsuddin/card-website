'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */
angular.module('muocApp')
  .controller('signUpCtrl', function ($scope, $http)
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
            console.log(user)
          })
          .error(function (err) {
            console.log('Error')
          });

      }

    }
  });
