/**
 * Created by rijaa on 07-Dec-15.
 */

app.controller('add_cardCtrl', function ($scope, $http, $location, sharedMethods, Category, $routeParams){



  $scope.user = JSON.parse(localStorage.getItem('user'))
  console.log($scope.user)
  if(!$scope.user)
  {
    $location.path('/');
  }

  $scope.logout = sharedMethods.logout;
  $scope.categories = Category.query();

  $scope.fetchCategoryWiseCards = function(category){
    $location.path('/admin_category/'+category);
  }

  $scope.catName = $routeParams.category_name;
  console.log($scope.catName);

  $scope.errorMessage = '';


  $scope.data = {
    category_name:$scope.catName,
    name:'',
    price:''
  }

  $scope.addCard = function() {

    $http.post('/card', $scope.data)
      .success(function (card) {
        $scope.errorMessage = '';
        $location.path('/admin_category/'+$scope.catName);

        console.log('Card Added')
        console.log($scope.data)


      })
      .error(function (err) {
        console.log('Error')
        $scope.errorMessage = 'Something went wrong';
        $scope.data = {
          category_name:'',
          name:'',
          price:''
        }

      });
  }

  var fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(e) {

    var file = fileInput.files[0];
    var imageType = /image.*/;

    if (file.type.match(imageType)) {
      var reader = new FileReader();

      reader.onload = function(e){
        $http.post('/uploadimage', {
          img: reader.result
        })
          .success(function(res) {
            $scope.data.imgurl=res.url
            console.log(res);

          })
          .error(function(err){
            fileInput.value = "";
            console.log(err)
          });
      };
      reader.readAsDataURL(file);
    } else {
      console.log("File not supported!");
    }

  });


});
