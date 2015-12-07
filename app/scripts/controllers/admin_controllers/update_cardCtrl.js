/**
 * Created by rijaa on 07-Dec-15.
 */
app.controller('update_cardCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams)
{ $scope.message = '';
  $scope.errorMessage = '';

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }


  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();


  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/admin_category/'+category);
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

  console.log($scope.card);

  $scope.updateCard = function() {

    $scope.message = '';
    $http.put('/updateCard/'+$scope.cardId, $scope.card)
      .success(function (card) {
        $scope.errorMessage = '';
        console.log('Card Updated')
        $location.path('/admin_category/'+$scope.card.category_name)

      })
      .error(function (err) {
        console.log('Error')
        $scope.errorMessage = 'User already exists with email';

      });

  }


});
