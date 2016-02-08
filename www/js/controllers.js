angular.module('donezies.controllers', [])

.controller('DonezFeedCtrl', function($scope, $stateParams, Users) {
  Users.all().then(function(users) {
    $scope.users = users;
  });

  $scope.remove = function(user) {
    Users.remove(user);
  };
})

.controller('UserProfileCtrl', function ($scope, $stateParams, Users) {
  console.log("UserProfileCtrl loaded.");

  Users.all().then(function(users) {
    console.log("Users loaded.");
    // eventually load by id
    $scope.user = users[0];
  });

// Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var profileOverviewHeight = $('.profile-overview').outerHeight();
  console.log("scroll.");

  $('main').scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();


    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > profileOverviewHeight){
      // Scroll Down
      $('.profile-overview').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('.profile-overview').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }



})


.controller('ViewCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  console.log("ViewCtrl loaded.")
  $scope.data = {
    numViewableSlides : 0,
    slideIndex : 0,
    initialInstruction : true,
    secondInstruction : false,
    slides : [
      {
        'template' : 'templates/user-profile-entries.html',
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

})
;
