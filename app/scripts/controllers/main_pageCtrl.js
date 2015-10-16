/* Created by Hira on 9/21/2015.*/

app.controller('main_pageCtrl', function ($scope, $http, $location, sharedMethods, Category){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  //console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;

  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  /*  console.log(category)
    $http.get('/cards/'+category)
  .then(function(response) {
    $scope.cards = response.data;
        console.log(response);
    // invalid response

  }, function(response) {
    // something went wrong
    console.log(response)
  });*/
}

  console.log($scope.categories)


/*  $http.get('/categories')
    .then(function(response) {
      //console.log(response);
      $scope.categories = response.data;
      // invalid response
    }, function(err) {
      // something went wrong
      console.log(err);
    });
  console.log($scope.categories)*/

  /*$http.get('/cards')
    .then(function(response) {
      //console.log(response);
      $scope.cards = response.data;

      // invalid response
    }, function(err) {
      // something went wrong
      console.log(err);
    });*/


});
