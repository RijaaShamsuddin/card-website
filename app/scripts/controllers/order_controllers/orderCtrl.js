/**
 * Created by Hira on 10/22/2015.
 */

app.controller('orderCtrl', function ($scope, $http, $location, sharedMethods, Category,cartItems){



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

  $scope.orders = cartItems.getAllCartItems();
  console.log($scope.orders);

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }


  $scope.errorMessage = '';




  $scope.totalPrice = function(){
    $scope.sum = 0;
    $scope.orders.forEach(function(order, i){
      $scope.sum+= (order.card.price * parseInt(order.quantity));
    });
  };
  $scope.totalPrice();


  $scope.data = {
    address:'',
    mobile_no:'',
    phone_no:'',
    items: $scope.orders,
    total_bill: $scope.sum,
    user_id: $scope.user._id,
    status: 'Unfulfilled',
    date_of_order: Date.now()
  }

  $scope.order = function() {


    $http.post('/order', $scope.data)
      .success(function (order) {
        $scope.errorMessage = '';
        cartItems.clearShoppingCart();
        $location.path('/checkout');


        console.log('Order created')
        console.log($scope.data)


      })
      .error(function (err) {
        console.log('Error')
        $scope.errorMessage = 'Something went wrong';
        $scope.data = {
          address:'',
          mobile_no:'',
          phone_no:'',
          items: $scope.orders,
          user_id: $scope.user._id,
          status: 'Unfulfilled'
        }

      });
  }

});
