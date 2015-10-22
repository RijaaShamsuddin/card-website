/**
 * Created by Hira on 10/22/2015.
 */

app.controller('cartCtrl', function ($scope, $http, $location, sharedMethods, Category){



  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }

  $scope.orders = JSON.parse(localStorage.getItem('cartItems'))
  console.log($scope.orders)


});
