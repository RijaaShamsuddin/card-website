/**
 * Created by sohaib on 1/15/2015.
 */
var mongoose = require('mongoose');

var Order = require('../models/order');
var User = require('../models/user');
var Category = require('../models/category');
var Card = require('../models/card');

module.exports = function(app)
{

  /************************* USERS ***************************/

  /* Create User */
  app.post('/user', function(req, res)
  {
    console.log(req.body.email);
    User.findOne({ 'email': req.body.email }, function (err, user) {
      // In case of any error, return using the done method
      if (err) {
        console.log('Error in SignUp: ' + err);
        res.send('Error in SignUp', 400);
      }
      // already exists
      if (user) {
        console.log('User already exists with email: ' +  req.body.email);
        res.send('User already exists with this email', 400);
      }
      else {
        // if there is no user with that email
        // create the user
        var newUser = new User();
        // set the user's local credentials
        newUser.userName = req.body.userName;
        newUser.email = req.body.email.toLowerCase();
        newUser.password = req.body.password;
        newUser.firstName = req.body.firstName || '';
        newUser.lastName = req.body.lastName || '';

        // save the user
        newUser.save(function (err, user) {
          if (err) {
            console.log('Error in Saving user: ' + err);
            throw err;
          }
          console.log('User Registration successful');
          res.send(user);
        });
      }
    });
  });


  /* Login User */
  app.post('/login', function(req, res)
  {

    if(req.body.email && req.body.password)
    {
      User.findOne({ 'email': req.body.email }, function (err, user) {
        // In case of any error, return using the done method
        if (err) {
          console.log('Error in fetching user: ' + err);
          res.send('Error', 400);

        }
        // user exists
        if (user) {
          console.log(user)
          if(user.password == req.body.password)
          {
            res.send(user)
          }
          else
          {
            console.log('Wrong password');
            res.send('Wrong Password', 400);
          }
        }

        else {
          console.log('Error in fetching user: ' + err);
          res.send('User not found', 400);
        }
      });
    }
    else
    {

      console.log(req.body);
      res.send('Please send email and password', 400);
    }

  });

  /* Find User */
  app.get('/user/:userName',  function(req, res)
  {
    if (req.params.userName)
    {
      User.find({userName : req.params.userName},
        function(err, user) {
          if (err)
            res.json({error:err});

          res.json(user);
        });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });

  /* Find All Users */
  app.get('/users', function (req, res) {

    User.find(function (err, users) {
      if (err)
        res.send(err);

      res.json(users);
    });
  });


  /* Update User */
  app.put('/user/:_id',  function(req, res)
  {
    if (req.params._id)
    {
      User.findOne({_id : req.params._id}, function(err, user) {
        if (err) res.send('User does not exist', 400);
        else
        {

          var obj = updatedItem(req.body);
          delete obj._id;
          User.findOneAndUpdate({_id : req.params._id}, obj, { 'new': true }, function(err, user)
          {
            if (err)
            {
              res.send('Could not update the document', 400)
            }
            else
            { console.log(user)
              res.send(user, 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });


  /* Delete User */
  app.delete('/deleteUser/:_id', function(req, res)
  {
    if (req.params._id == req.user._id)
    {
      User.findOne({_id : req.params._id}, function(err, user) {
        if (err) res.send('User does not exist', 400);
        else
        {
          User.remove({ _id : req.params._id }, function(err) {
            if (err)
            {
              res.send('Could not delete the user', 400)
            }
            else
            {
              res.send('User deleted successfully', 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });






  /************************* ORDERS ***************************/

  /* Find All Orders */
  app.get('/orders', function (req, res) {

    Order.find(function (err, orders) {
      if (err)
        res.send(err);

      res.json(orders);
    });
  });


  /* Find User Orders */
  app.get('/orders/:user_id', function (req, res) {

    var user_id = req.params.user_id;

    var filter = {user_id: user_id}

    Order.find(filter, function (err, order) {
      if (err)
        res.send(err);

      res.json(order);
    });
  });

  /* Create Order */
  app.post('/order', function(req, res)
  {

    Order.findOne({ 'user_id': req.body.user_id }, function (err, user) {
      // In case of any error, return using the done method
      if (err) {
        console.log('Error in connection: ' + err);
        res.send('Error in connection', 400);
      }

      else {

        // create the order
        var newOrder = new Order();
        // set the user's local credentials
        newOrder.user_id = req.body.user_id;
        newOrder.address = req.body.address;
        newOrder.mobile_no = req.body.mobile_no;
        newOrder.phone_no = req.body.phone_no;
        newOrder.status = req.body.status;
        newOrder.items = req.body.items;
        newOrder.total_bill = req.body.total_bill;
        newOrder.date_of_order = req.body.date_of_order;

        // save the order
        newOrder.save(function (err, order) {
          if (err) {
            console.log('Error in Saving order: ' + err);
            throw err;
          }
          console.log('Order Successful');
          res.send(order);
        });
      }
    });
  });






  /************************* CATEGORIES ***************************/


  /* Get All Categories */
  app.get('/categories', function (req, res) {

    Category.find(function (err, categories) {
      if (err)
        res.send(err);

      res.json(categories);
    });
  });



  /* Get one Category */
  app.get('/:categoryName', function (req, res) {

    var categoryName = req.params.categoryName; // GET THE CATEGORY ID FROM THE GET REQUEST

    var filter = {name: categoryName} // CREATE YOUR FILTER AS YOU WISH

    Category.find(filter, function (err, category) { //USE YOUR FILTER AS THE FIRST ARGUMENT OF THE FIND METHOD
      if (err)
        res.send(err);

      res.json(category);
    });
  });


  /* Create Category */
  app.post('/category', function(req, res)
  {
    console.log(req.body.name);
    Category.findOne({ 'name': req.body.name}, function (err, category) {
      // In case of any error, return using the done method
      if (err) {
        console.log('Error: ' + err);
        res.send('Error', 400);
      }
      // already exists
      if (category) {
        console.log('Category already exists: ' +  req.body.name);
        res.send('Category already exists', 400);
      }
      else {
        // if there is no category
        // create the category
        var newCategory = new Category();
        // set the category's local credentials
        newCategory.name = req.body.name;


        // save the category
        newCategory.save(function (err, category) {
          if (err) {
            console.log('Error in Saving category: ' + err);
            throw err;
          }
          console.log('Category Added Successfully');
          res.send(category);
        });
      }
    });
  });



  /* Update Category */
  app.put('/updateCategory/:name',  function(req, res)
  {
    if (req.params.name)
    {
      Category.findOne({name : req.params.name}, function(err, category) {
        if (err) res.send('Category does not exist', 400);
        else
        {

          var obj = updatedItem(req.body);
          delete obj._id;
          Category.findOneAndUpdate({name : req.params.name}, obj, { 'new': true }, function(err, category)
          {
            if (err)
            {
              res.send('Could not update the document', 400)
            }
            else
            { console.log(category)
              res.send(category, 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });

  /* Delete Category */
  app.delete('/deleteCategory/:name', function(req, res)
  {
    if (req.params.name == req.category.name)
    {
      Category.findOne({name : req.params.name}, function(err, category) {
        if (err) res.send('Category does not exist', 400);
        else
        {
          Category.remove({ name : req.params.name }, function(err) {
            if (err)
            {
              res.send('Could not delete the category', 400)
            }
            else
            {
              res.send('Category deleted successfully', 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });




  /************************* CARDS ***************************/

  /* View all cards */
  app.get('/cards', function (req, res) {

    Card.find(function (err, cards) {
      if (err)
        res.send(err);

      res.json(cards);
    });
  });


  /* Fetch Categorywise Cards  */
  app.get('/cards/:category_name', function (req, res) {

    var category_name = req.params.category_name; // GET THE CATEGORY _ID FROM THE GET REQUEST

    var filter = {category_name: category_name} // CREATE YOUR FILTER AS YOU WISH

    Card.find(filter, function (err, cards) { //USE YOUR FILTER AS THE FIRST ARGUMENT OF THE FIND METHOD
      if (err)
        res.send(err);

      res.json(cards);
    });
  });


  /* View one card*/
  app.get('/card/:_id', function (req, res) {

    var _id = req.params._id; // GET THE CATEGORY _ID FROM THE GET REQUEST

    var filter = {_id: _id} // CREATE YOUR FILTER AS YOU WISH

    Card.find(filter, function (err, card) { //USE YOUR FILTER AS THE FIRST ARGUMENT OF THE FIND METHOD
      if (err)
        res.send(err);

      res.json(card);
    });
  });

  /* Create Card */
  app.post('/card', function(req, res)
  {
    console.log(req.body._id);
    Card.findOne({ '_id': req.body._id}, function (err, card) {
      // In case of any error, return using the done method
      if (err) {
        console.log('Error: ' + err);
        res.send('Error', 400);
      }
      // already exists
      if (card) {
        console.log('Card already exists: ' +  req.body._id);
        res.send('Card already exists', 400);
      }
      else {
        // if there is no card
        // create the card
        var newCard = new Card();
        // set the card's local credentials
        newCard.category_name = req.body.category_name ;
        newCard.name = req.body.name;
        newCard.price = req.body.price;
        newCard.url = req.body.url;



        // save the category
        newCard.save(function (err, card) {
          if (err) {
            console.log('Error in Saving Card: ' + err);
            throw err;
          }
          console.log('Card Added Successfully');
          res.send(card);
        });
      }
    });
  });


  /* Update Card */
  app.put('/updateCard/:_id',  function(req, res)
  {
    if (req.params._id)
    {
      Card.findOne({_id : req.params._id}, function(err, card) {
        if (err) res.send('Card does not exist', 400);
        else
        {

          var obj = updatedItem(req.body);
          delete obj._id;
          Card.findOneAndUpdate({_id : req.params._id}, obj, { 'new': true }, function(err, card)
          {
            if (err)
            {
              res.send('Could not update the document', 400)
            }
            else
            { console.log(card)
              res.send(card, 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });


  /* Delete Card */
  app.delete('/deleteCard/:_id', function(req, res)
  {
    if (req.params._id == req.card._id)
    {
      Card.findOne({_id : req.params._id}, function(err, card) {
        if (err) res.send('Card does not exist', 400);
        else
        {
          Card.remove({ _id : req.params._id }, function(err) {
            if (err)
            {
              res.send('Could not delete the card', 400)
            }
            else
            {
              res.send('Card deleted successfully', 200);
            }
          });
        }
      });
    }
    else
    {
      res.send('Unauthorized Request', 400)
    }
  });





}



function updatedItem(body)
{
  var ob = {};
  for (var field in body)
  {
    ob[field] = body[field];
  }
  return ob;
}
