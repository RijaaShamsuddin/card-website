/**
 * Created by Hira on 9/19/2015.
 */

angular.module('muocApp')
  .factory('logoutFactory', function ($http, $location) {

      return
    {
      remove: (function (user) {
        localStorage.removeItem('User');
        $location.path('/')
        console.log("done")
        })

    }



  });

