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

  })

  .factory('cartItems',function(){
    return {
      orders: [],
      add: function(item) {
        this.orders.push(item)
      }

    }
    //return this.orders;
  });


