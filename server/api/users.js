/**
 * Created by sohaib on 1/15/2015.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
module.exports = function(app)
{

  app.post('/user', function(req, res)
  {
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
      } else {
        // if there is no user with that email
        // create the user
        var newUser = new User();
        // set the user's local credentials
        newUser.username = req.body.username;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.firstName = req.body.firstName || '';
        newUser.lastName = req.body.lastName || '';
        //newUser.address = req.body.address || '';
        //newUser.city =  req.body.city || '';
        //newUser.state =  req.body.state || '';
        //newUser.country =  req.body.country || '';
        //newUser.role =  req.body.role || 'agent';
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
