angular
  .module('donezies')
  .controller('UserProfileCtrl', UserProfileCtrl);

function UserProfileCtrl($scope, $stateParams, User) {
  // Hide Header on on scroll down

  console.log("hello");

// Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var profileOverviewHeight = $('.profile-overview').outerHeight();

  $('main').scroll(function(event){
    console.log('hello1');
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


  User.all().then(function(user) {
    // get user by id
    $scope.user = user[0];
  });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };


}
