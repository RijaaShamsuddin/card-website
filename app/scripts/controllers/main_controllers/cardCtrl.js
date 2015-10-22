/**
 * Created by Hira on 9/16/2015.
 */

app.controller('cardCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams, cartItems){

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

  $scope.addItem = function(card) {
    console.log("in the addItem method");
    cartItems.add(card);
    console.log(cartItems.orders)
  }


  $scope.order = function(){
    $scope.addItem($scope.card);
    localStorage.setItem('cartItems', JSON.stringify(cartItems.orders));
    console.log(JSON.stringify(cartItems.orders));
  }

});

