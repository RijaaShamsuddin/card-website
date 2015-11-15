/**
 * Created by Hira on 9/19/2015.
 */

app
  .factory('sharedMethods', function () {
    return {
      logout: function () {
        localStorage.removeItem("user")
        localStorage.removeItem("cartItems")
      }

    };

  })

  .factory('Category', function  ($resource) {
    return $resource('/categories');

  })

  .factory('cartItems',function(){
    return {
      getAllCartItems : function(){
        return JSON.parse(localStorage.getItem('cards')) || [];
      },
      saveCardItems  : function(cartItems){
        localStorage.setItem('cards', JSON.stringify(cartItems));
      },
      removeItem  : function(index)
      {
        var items = JSON.parse(localStorage.getItem('cards'));
        items.splice(index,1);
        localStorage.setItem('cards', JSON.stringify(items));
        return items;
      },
      clearShoppingCart : function(){
        localStorage.removeItem('cards');
      }


      /*   orders  : localS
       orders: [],
       add: function(item) {
       this.orders.push(item)
       }*/


      //return this.orders;
    }


  });
