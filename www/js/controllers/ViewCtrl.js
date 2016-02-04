angular.module('donezies.controllers', [])
.controller('ViewCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.data = {
    numViewableSlides : 0,
    slideIndex : 0,
    initialInstruction : true,
    secondInstruction : false,
    slides : [
      {
        'template' : 'templates/user-profile.html',
        'viewable' : true
      },

      {
        'template' : 'templates/donezies.html',
        'viewable' : true
      },

      {
        'template' : 'templates/user-feed.html',
        'viewable' : true
      }
    ]
  };

  var countSlides = function() {
    $scope.data.numViewableSlides = 0;

    _.forEach($scope.data.slides, function(slide) {
      if(slide.viewable === true) $scope.data.numViewableSlides++;
    })

    console.log($scope.data.numViewableSlides + " viewable slides");

  }

  countSlides();

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };


  // Called each time the slide changes
  $scope.slideChanged = function(index) {

    $scope.data.slideIndex = index;
  };

});
