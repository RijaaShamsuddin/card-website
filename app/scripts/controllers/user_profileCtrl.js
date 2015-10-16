/**
 * Created by Hira on 10/7/2015.
 */

app.controller('user_profileCtrl', function ($scope, $http, $location, sharedMethods,Category){

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

  $scope.fetchUser = function(user){
    $location.path('/updateUser/'+user);
  }

  /*$http.get('/categories')
    .then(function(response) {
      //console.log(response);
      $scope.categories = response.data;
      // invalid response
    }, function(err) {
      // something went wrong
      console.log(err);
    });*/

});
