/**
 * Created by rijaa on 24-Oct-15.
 */

/**
 * Created by rijaa on 24-Oct-15.
 */

app.controller('admin_usersCtrl', function ($scope, $http, $location, sharedMethods, Category) {


  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function (category) {
    $location.path('/admin_category/' + category);

  }

  $scope.fetchOrders = function (user_id) {
    $location.path('/orders/' + user_id);
  }

  $http.get('/users')
    .then(function(response) {
      //console.log(response);
      $scope.users = response.data;
      console.log($scope.users)
      // invalid response
    }, function(err) {
      // something went wrong
      console.log(err);
    });




});

