/**
 * Created by Hp on 12/5/2015.
 */
/**
 * Created by Hira on 8/5/2015.
 */

app.controller('admin_categoryCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams)
{

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

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

  $scope.fetchCategory=function(category){
    $location.path('/add_card/'+category);
  }

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/admin_category/'+category);
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


  $scope.fetchCard = function(card){
    $location.path('/update_card/'+card);
  }

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }

  $scope.update = function() {

    $http.put('/updateCategory/'+$scope.catName)
      .success(function (category) {
        $scope.errorMessage = '';
        console.log('category updated')

        $location.path('/AdminPanel')

      })
      .error(function (err) {
        console.log('Error')

      });

  }


});

