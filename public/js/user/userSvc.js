angular.module("userModule")
    .factory("userSvc", function ($rootScope, $log, $http, $cookies) {

        var users = '/api/collections/users';
        var chatroom1 = '/api/collections/chatroom';

        var getUsers = function(){
          return $http.get(users);
        };

        var addUser = function(user) {
          return $http.post(users, user).then(function(response) {
                $rootScope.$broadcast("user:added");
                $log.info("user:added");
            })
        };

        var deleteUser = function(user) {
          return $http.delete(users + "/" + user._id, user).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("user:deleted");
                $log.info("user:deleted");
            })
        };

        ///////////cookie username
        var addUsername = function(name) {
          $cookies.username = name;
        };

        ///////////////chatroom1
        var getMsgs = function(){
          return $http.get(chatroom1);
        };

        var createMsg = function(msg) {
          return $http.post(chatroom1, msg).then(function (response) {
                $rootScope.$broadcast("message:added");
                $log.info("message:added");
            })
        };


        return {
          getUsers: getUsers,
          addUsername:addUsername,
          addUser: addUser,
          deleteUser: deleteUser,
          ////
          getMsgs: getMsgs,
          addMsg: createMsg,
        };
    });
