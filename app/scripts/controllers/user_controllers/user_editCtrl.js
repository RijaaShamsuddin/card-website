/**
 * Created by Hira on 10/16/2015.
 */

app.controller('user_editCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams)
{ $scope.message = '';
  $scope.errorMessage = '';

  $scope.data = {
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    password: '',
    confirmPassword:''
  }

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }


  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchOrders = function(user_id){
    $location.path('/orders/'+user_id);
  }

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/gallery/'+category);
  }

  $scope.userId = $routeParams._id;
  console.log($scope.userId);



  $scope.update = function() {
    if ($scope.data.password != $scope.data.confirmPassword)
    {
      $scope.message = 'Passwords do not match';


    }

    else
    {
      $scope.message = '';
      $http.put('/user/'+$scope.userId, $scope.data)
        .success(function (user) {
          $scope.errorMessage = '';
          console.log('User created')
          $location.path('/')

        })
        .error(function (err) {
          console.log('Error')
          $scope.errorMessage = 'User already exists with email';

        });

    }

  }



});
