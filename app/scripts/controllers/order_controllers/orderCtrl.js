/**
 * Created by Hira on 10/22/2015.
 */

app.controller('orderCtrl', function ($scope, $http, $location, sharedMethods, Category){



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

  $scope.errorMessage = '';


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


  $scope.data = {
    address:'',
    mobile_no:'',
    phone_no:'',
    items: $scope.orders,
    total_bill: $scope.sum,
    user_id: $scope.user._id,
    status: 'Unfulfilled',
    date_of_order: ''
  }

  $scope.order = function() {


    $http.post('/order', $scope.data)
        .success(function (order) {
          $scope.errorMessage = '';
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
