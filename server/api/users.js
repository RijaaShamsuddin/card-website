/**
 * Created by sohaib on 1/15/2015.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var Category = require('../models/category');
var Card = require('../models/card');

module.exports = function(app)
{
 app.get('/categories', function (req, res) {

    Category.find(function (err, categories) {
      if (err)
        res.send(err);

      res.json(categories);
    });
  });

  app.get('/cards', function (req, res) {

    Card.find(function (err, cards) {
      if (err)
        res.send(err);

      res.json(cards);
    });
  });


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


  app.get('/user/:username',  function(req, res)
  {
    if (req.params.username)
    {
      User.findOne({username : req.params.username},
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

  app.get('/users',  function(req, res)
  {
    User.find().exec(function(err, users){
      if (users.length)
      {
        res.send(users);
      }
      else
      {
        res.send('Users not found', 400)
      }

    });
  });


  app.put('/user/:username',  function(req, res)
  {
    if (req.params.username)
    {
      User.findOne({username : req.params.username}, function(err, user) {
        if (err) res.send('User does not exist', 400);
        else
        {
          var obj = updatedUser(req.body);
          delete obj._id;
          User.update({username : req.params.username}, obj, function(err, user)
          {
            if (err)
            {
              res.send('Could not update the document', 400)
            }
            else
            {
              res.send('Updated user successfully', 200);
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
  app.delete('/user/:username', function(req, res)
  {
    if (req.params.username == req.user.username)
    {
      User.findOne({username : req.params.username}, function(err, user) {
        if (err) res.send('User does not exist', 400);
        else
        {
          User.remove({ username : req.params.username }, function(err) {
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

}



function updatedUser(body)
{
  var ob = {};
  for (var field in body)
  {
    ob[field] = body[field];
  }
  return ob;
}
