angular.module('donezies.services', [])

.factory('Users', function($http, $q) {
    var users;

  return {
    all: function() {
      return users = $http.get('data/users.json').then(function(res) {
        return res.data;
      });
    },
    remove: function(user) {
      users.splice(chats.indexOf(user), 1);
    },
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
