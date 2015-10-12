/**
 * Created by Hira on 9/19/2015.
 */

app.factory('sharedMethods', function () {
    return {
      logout: function () {
        localStorage.removeItem("user")
      }
  };

  });

