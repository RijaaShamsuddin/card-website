/**
 * Created by Hira on 8/5/2015.
 */

app.controller('galleryCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams)
  {

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
     console.log(category)
     $http.get('/cards/'+category)
     .then(function(response) {
     $scope.cards = response.data;
     console.log(response);
     // invalid response

     }, function(response) {
     // something went wrong
     console.log(response)
     });
     }


    $scope.catId = $routeParams.category_id;
    console.log($scope.catId);

  $http.get('/cards/'+$scope.catId)
     .then(function(response) {
     $scope.cards = response.data;
     console.log(response);
     // invalid response

     }, function(response) {
     // something went wrong
     console.log(response)
     });

    $scope.fetchCard = function(card){
      $location.path('/cards/'+card);
    }

    $http.get('/cards')
       .then(function(response) {
         //console.log(response);
         $scope.cards = response.data;
         console.log($scope.cards)
         // invalid response
       }, function(err) {
         // something went wrong
         console.log(err);
       });


    });
