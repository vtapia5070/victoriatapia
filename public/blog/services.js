angular.module('myApp.blogServices', [])

.service('handleRequest', ['$http', function ($http) {
  this.getPost = function () {
    // console.log("get request in process!");
    $http.get('/')
      .then(function (data) {
        // console.log("data is", data);
      }, function (err) {
        // console.log("error is", err);
    });
  };

  this.sendPost = function (data, callback) {
    console.log("inside sending post to server");
    $http.post('/post', data)
    .then(function (result) {
      // console.log("response is ", result);
      callback(true);
    }, function (err) {
      // console.log("err from postRequest is", err);
      callback(false);
    });
  };
}]);