

angular.module("userModule")
  .controller("userCtrl", function ($rootScope, $route, $scope, $timeout, $location, $cookies, $routeParams, $interval, userSvc) {



    ////////////////
    $scope.getMsgs = $interval(function()
      {
           userSvc.getMsgs().success(function(msgs){
           $scope.msgs = msgs.reverse();

      });

           userSvc.getUsers().then(function (users) {
           $scope.users = users.data;

        });


     }, 500);


    $scope.addUser = function (user) {
       userSvc.addUser({
       username: $scope.user,
     })
    };


    $scope.deleteUser = function (user) {
      userSvc.deleteUser(user);
    };

    $scope.addUsername = function(name) {
    userSvc.addUsername(name);
    if (name === undefined) {
        console.log("Please enter a name");
    } else {
        $location.path("/chat1");
    }

  };

  $scope.username = $cookies.username;

    ///////////////Messages

    $scope.addMsg = function (msg) {
      userSvc.addMsg({
      posteddate: Date.now(),
      content: msg.content,
      username:$scope.username,
      }).then(function () {
        document.getElementById("chatInput").value = "";
      });

    };

    $scope.scrollBot = function () {
        var objDiv = document.getElementById("chatBox");
        objDiv.scrollTop = objDiv.scrollHeight;
        console.log("dasf")
    };


    /////////////////////////////////////listeners
    $rootScope.$on("user:deleted", function () {
      userSvc.getUsers().then(function (users) {
        $scope.users = users.data;
      });
  });

    $rootScope.$on("user:added", function () {
      userSvc.getUsers().then(function (users) {
        $scope.users = users.data;
      });
  });


});
