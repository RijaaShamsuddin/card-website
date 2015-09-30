/**
 * Created by Hira on 9/22/2015.
 */

app.controller('aboutCtrl', function ($scope, sharedMethods){

  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)

  $scope.logout = sharedMethods.logout;

});
