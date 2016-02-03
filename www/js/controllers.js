angular.module('donezies.controllers', [])

.controller('DonezFeedCtrl', function($scope, $stateParams, Chats) {
  Chats.all().then(function(chats) {
    $scope.chats = chats;
  });
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DonezfeedDetailCtrl', function($scope, $stateParams, Chats) {
  Chats.all().then(function(chats) { 
    $scope.chats = chats;
  });
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DoneziesCtrl', function($scope, $stateParams) {
  $scope.options = {
    loop: false,
    // effect: fade,
    speed: 500,
  }
  $scope.data = {};
  $scope.$watch('data.slider', function(nv, ov) {
    $scope.slider = $scope.data.slider;
  })
})

.controller('SOSCtrl', function($scope, Chats) {
  Chats.all().then(function(chats) { 
    $scope.chats = chats;
  });
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('SOSDetailCtrl', function($scope, $stateParams, Chats) {
  Chats.all().then(function(chats) { 
    $scope.chats = chats;
  });
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('SOSComposeCtrl', function($scope, $stateParams, Compose) {
  
})

;
