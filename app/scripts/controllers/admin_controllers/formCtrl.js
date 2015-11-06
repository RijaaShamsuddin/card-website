/*
*
 * Created by rijaa on 26-Oct-15.
'use strict';

*/
/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 *//*


app.controller('formCtrl', function ($scope, $http, $location)
{ $scope.message = '';
  $scope.errorMessage = '';

  $scope.data = {
    CategoryName:'',
    CategoryID:'',

  }

  $scope.AddCategory = function() {
    if ($scope.data.id != $scope.data.confirmid)
    {
      $scope.message = 'ID do not match';


    }

    else
    {
      $scope.message = '';
      $http.post('/category', $scope.data)
        .success(function (category) {
          $scope.errorMessage = '';
          console.log('Category created')
          $location.path('/')

        })
        .error(function (err) {
          console.log('Error')
          $scope.errorMessage = 'Category already exists with this ID';

        });

    }

  }
});



'use strict';

*/
/**
 * @ngdoc function
 * @name muocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the muocApp
 *//*


app.controller('formCtrl', function ($scope, $http, $location)
{ $scope.message = '';
  $scope.errorMessage = '';

  $scope.data = {
    CardName:'',
    CategoryID:'',
    CardID:'',
    CardPrice:'',
    Description:'',

  }

  $scope.AddCard = function() {
    if ($scope.data.CR_Id != $scope.data.confirmCR_Id)
    {
      $scope.message = ' Card ID do not match';


    }

    else
    {
      $scope.message = '';
      $http.post('/card', $scope.data)
        .success(function (card) {
          $scope.errorMessage = '';
          console.log('Card created')
          $location.path('/')

        })
        .error(function (err) {
          console.log('Error')
          $scope.errorMessage = 'Card already exists with this ID';

        });

    }

  }
});
*/
