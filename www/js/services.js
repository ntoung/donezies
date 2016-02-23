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
})


.factory('Badges', function($http, $q) {
  var badges;
  return {
    all: function() {
      return badges = $http.get("data/badges.json").then(function(res) {
        return res.data;
      });
    }
  }
})

.factory('Entries', function($http, $q) {
  var entries;
  return {
    all: function() {
      return entries = $http.get("data/entries.json").then(function(res) {
        return res.data;
      });
    }
  }
})

.factory('UserFeedEntries', function($http, $q) {
  var entries;
  return {
    all: function() {
      return entries = $http.get("data/userfeed.json").then(function(res) {
        return res.data;
      });
    }
  }
});

