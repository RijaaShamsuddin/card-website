'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */

app.controller('LoginCtrl', function ($scope, $http, $location, sharedMethods)
  {


    $scope.errorMessage = '';
    $scope.data = {
      email:'',
      password: ''
    }

    $scope.logout = sharedMethods.logout;


    $scope.login = function() {

        $http.post('/login', $scope.data)
          .success(function (user) {
            $scope.errorMessage = '';
            localStorage.setItem("user", JSON.stringify(user));
            console.log(user)
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



  });
