/**
 * Created by Hira on 10/23/2015.
 */

app.controller('user_ordersCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.errorMessage = '';
  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }


  $scope.orders = JSON.parse(localStorage.getItem('cartItems'))
  console.log($scope.orders)

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
    console.log(user_id)
    $http.get('/cards/'+user_id)
      .then(function(response) {
        $scope.userOrders = response.data;
        // invalid response

      }, function(response) {
        // something went wrong
        console.log(response)
      });
  }

  $scope.userId = $routeParams.user_id;
  console.log($scope.userId);



  $http.get('/orders/'+$scope.userId)
    .then(function(response) {
      $scope.userOrders = response.data;
      console.log($scope.userOrders);
      // invalid response

    }, function(response) {

      // something went wrong
      console.log(response)
    });


    if(!$scope.userOrders){
      $scope.errorMessage = 'Oh my! You currently have no orders! Shop Shop Shop!';
    }







});
