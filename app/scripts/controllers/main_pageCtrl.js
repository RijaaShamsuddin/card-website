/**
 * Created by Hira on 9/21/2015.
 */

app.controller('main_pageCtrl', function ($scope, sharedMethods){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)

  $scope.logout = sharedMethods.logout;

});
