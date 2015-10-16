/**
 * Created by Hira on 9/19/2015.
 */

app
  .factory('sharedMethods', function () {
    return {
      logout: function () {
        localStorage.removeItem("user")
      }

    };

  })

  .factory('Category', function  ($resource) {
    return $resource('/categories');

  });



/*
angular.module('airlineServices', ['ngResource'])
  .factory('Airport', function  ($resource) {
    return $resource('/airports/:airportCode');
  })
  .factory('Flights', function  ($resource) {
    return $resource('/flights');
  })
  .factory('Reservations', function  ($resource) {
    return $resource('/reservations');
  });*/
