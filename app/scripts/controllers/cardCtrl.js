/**
 * Created by Hira on 9/16/2015.
 */



app.controller('cardCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.cardId = $routeParams._id;
  console.log($scope.cardId);

  $http.get('/card/'+$scope.cardId)
    .then(function(response) {
      $scope.card = response.data;
      console.log($scope.card);
      // invalid response

    }, function(response) {
      // something went wrong
      console.log(response)
    });



});

