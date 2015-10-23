/**
 * Created by Hira on 10/22/2015.
 */

app.controller('cartCtrl', function ($scope, $http, $location, sharedMethods, Category, cartItems){



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

  $scope.total = function() {
    $scope.sum = 0;
    angular.forEach($scope.orders, function (options) {
      angular.forEach(options, function (value) {
        $scope.sum += value.price;

      })
    })
    console.log($scope.sum)
  }

  $scope.total();

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }


 $scope.remove = function(card){
   console.log(card)
   var indexOfCard = $scope.orders.indexOf(card);
   $scope.orders.splice(indexOfCard, 1);
   $scope.total();
   console.log($scope.orders)
 }


});
