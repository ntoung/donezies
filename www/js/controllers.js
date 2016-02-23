angular.module('donezies.controllers', [])

.controller('DonezFeedCtrl', function($scope, $stateParams, Users) {
  Users.all().then(function(users) {
    $scope.users = users;
  });

  $scope.remove = function(user) {
    Users.remove(user);
  };
})

.controller('UserFeedCtrl', function($scope, $stateParams, UserFeedEntries) {
  console.log('UserFeedCtrl loaded.');

  UserFeedEntries.all().then(function(feed) {
    console.log("UserFeedEntries loaded.")
    $scope.entries = feed;
  })


})

.controller('EntriesCtrl', function($scope, $stateParams) {
  console.log('Entries loaded.');
})

.controller('UserProfileCtrl', function ($scope, $stateParams, $ionicScrollDelegate, Users, Badges, Entries) {
  console.log("UserProfileCtrl loaded.");

  Users.all().then(function(users) {
    console.log("Users loaded.");
    // eventually load by id
    $scope.user = users[0];
  });

  Badges.all().then(function(badges) {
    console.log("Badges loaded.");
    $scope.badges = badges;
  });

  Entries.all().then(function(entries) {
    console.log("Entries loaded.");
    $scope.entries = entries;
  })



// Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;

  var startPositionY = $('.subview').position().top;

  $('ion-content').scroll(function(event){
    if (Math.abs(($('.subview').position().top - startPositionY)) > 100) {
      if (!didScroll) {
        didScroll = true;
        startPositionY = $('.subview').position().top;
      }
    }
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);

  function hasScrolled() {
    var endPositionY = $('.subview').position().top;
    if (endPositionY < startPositionY){
      // Scroll Down
      console.log('scrolled down');
      $('.top-view').css('display', 'none');
      didScroll = false;
    } else {
      // Scroll Up
      if ((endPositionY - startPositionY) > 40){
        console.log('scrolled up');
        $('.top-view').css('display', 'initial');
      }
    }
  }

  $scope.GoToEntry = function() {

    console.log(this);

    var id = this.entry.id;

    var isHidden = $('#' + id).css('display') == 'none';

    if (isHidden) {
      $('#' + id).css("display", 'initial');
    }
    else {
      $('#' + id).css("display", 'none');
    }



  }

  /* Subview Controller */
  $('.nav-entries').click(function(event) {
    console.log("Subview: entries");
    $('.subview-entries').css('display', 'initial');
    $('.subview-map').css('display', 'none');
    $('.subview-badges').css('display', 'none');
  });

  $('.nav-map').click(function(event) {
    console.log("Subview: map");
    $('.subview-entries').css('display', 'none');
    $('.subview-map').css('display', 'initial');
    $('.subview-badges').css('display', 'none');
  });

  $('.nav-badges').click(function(event) {
    console.log("Subview: badges");
    $('.subview-entries').css('display', 'none');
    $('.subview-map').css('display', 'none');
    $('.subview-badges').css('display', 'initial');
  });




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
        'template' : 'templates/donezies.html',
        'viewable' : true
      },

      {
        'template' : 'templates/user-profile.html',
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
