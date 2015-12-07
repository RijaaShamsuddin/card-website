/**
 * Created by Hp on 10/24/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 */

app.controller('AdminPanelCtrl', function ($scope, $http, $location, sharedMethods,Category)
{
  $scope.message = '';

  $scope.errorMessage = '';

  $scope.data = {
    name:''
  }

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  console.log('Admin Panel')
  $scope.categories = Category.query();
  console.log($scope.categories)
  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/admin_category/'+category);
  }

  $scope.createCategory = function() {


    $http.post('/category', $scope.data)
      .success(function (category) {
        $scope.errorMessage = '';
        $location.path('/AdminPanel');


        console.log('Category created')
        console.log($scope.data)


      })
      .error(function (err) {
        console.log('Error')
        $scope.errorMessage = 'Something went wrong';
        $scope.data = {
          name:''
        }

      });
  }


});
