/**
 * Created by Hp on 12/6/2015.
 */
/**
 * Created by Hira on 9/16/2015.
 */

app.controller('admin_cardCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams, cartItems){

  $scope.message = '';
  $scope.quantity = {count: '1' };

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

  $scope.cardId = $routeParams._id;

  $http.get('/card/'+$scope.cardId)
    .then(function(response) {
      $scope.card = response.data;
      // invalid response

    }, function(response) {
      // something went wrong
      console.log(response)
    });

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }

  $scope.order = function(){
    var items = cartItems.getAllCartItems();
    var newCard = {quantity : $scope.quantity.count, card: $scope.card[0]};
    items.push(newCard);
    cartItems.saveCardItems(items);
    $scope.message = 'Card Added in cart';
  }

});

