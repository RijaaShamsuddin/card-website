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


    $scope.catName = $routeParams.category_name;
    console.log($scope.catName);

  $http.get('/cards/'+$scope.catName)
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

    $scope.fetchOrders = function(user_id){
      $location.path('/orders/'+user_id);
    }

  /*  $http.get('/cards')
       .then(function(response) {
         //console.log(response);
         $scope.cards = response.data;
         console.log($scope.cards)
         // invalid response
       }, function(err) {
         // something went wrong
         console.log(err);
       });*/


    });
