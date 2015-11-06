/**
 * Created by rijaa on 24-Oct-15.
 */

app.controller('admin_orderCtrl', function ($scope, $http, $location, sharedMethods, Category) {


  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function (category) {
    $location.path('/gallery/' + category);

  }

  $scope.fetchOrders = function (user_id) {
    $location.path('/orders/' + user_id);
  }

  $http.get('/orders')
    .then(function(response) {
      //console.log(response);
      $scope.orders = response.data;
      // invalid response
    }, function(err) {
      // something went wrong
      console.log(err);
    });
  console.log($scope.orders)



});

