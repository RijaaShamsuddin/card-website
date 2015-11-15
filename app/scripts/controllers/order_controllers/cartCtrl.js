/**
 * Created by Hira on 10/22/2015.
 */

app.controller('cartCtrl', function ($scope, $http, $location, sharedMethods, Category, cartItems){



  $scope.user = JSON.parse(localStorage.getItem('user'));
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }

  $scope.orders = cartItems.getAllCartItems();


  $scope.remove = function(index){
    $scope.orders = cartItems.removeItem(index);
    $scope.totalPrice();
  };

  $scope.totalPrice = function(){
    $scope.sum = 0;
    $scope.orders.forEach(function(order, i){
      $scope.sum+= (order.card.price * parseInt(order.quantity));
    });
  }
  $scope.totalPrice();
  /* $scope.total = function() {
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


  $scope.remove = function(index){
    //console.log(card)
    //var indexOfCard = $scope.orders.indexOf(card);
    $scope.orders.splice(index, 1);
    $scope.total();
    console.log($scope.orders)
  }
 */

});
