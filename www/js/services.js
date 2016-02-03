angular.module('donezies.services', [])

.factory('Chats', function($http, $q) {
    var chats;

  return {
    all: function() {
      return chats = $http.get('data/chats.json').then(function(res) {
        return res.data;
      });
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
