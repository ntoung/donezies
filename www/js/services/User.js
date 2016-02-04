angular.module('donezies.services', [])
  .factory('User', function($http, $q) {
    var users;

    return {
      all: function() {
        return users = $http.get('data/users.json').then(function(res) {
          /* Logic for getting user by userid. */
          console.log(users);
          return res.data;
        });
      },
      //remove: function(user) {
      //  users.splice(chats.indexOf(chat), 1);
      //},
      get: function(userId) {
        for (var i = 0; i < users.length; i++) {
          if (users[i].id === parseInt(userId)) {
            return users[i];
          }
        }
        return null;
      }
    };
  });
