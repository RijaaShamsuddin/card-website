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
  console.log('Admin Panel')
  $scope.categories = Category.query();
  console.log($scope.categories)
  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }

});
