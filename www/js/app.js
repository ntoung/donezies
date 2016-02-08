var app = angular.module('donezies', ['ionic', 'donezies.controllers', 'donezies.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
  //  .state('tab', {
  //  url: '/tab',
  //  abstract: true,
  //  templateUrl: 'templates/tabs.html'
  //})

  // Each tab has its own nav history stack:

  .state('user-profile', {
    url: '/u',
    templateUrl: 'templates/user-profile-entries.html',
    controller: 'UserProfileCtrl'
  })
    .state('user-profile.entries', {

    })
    .state('user-profile.images', {

    })
    .state('user-profile.map', {

    })
    .state('user-profile.badges', {

    })

  //.state('tab.donezfeed', {
  //  url: '/donezfeed',
  //  views: {
  //    'tab-donezfeed': {
  //      templateUrl: 'templates/tab-donezfeed.html',
  //      controller: 'DonezFeedCtrl'
  //    }
  //  }
  //})
  //.state('tab.donezfeed-detail', {
  //    url: '/donezfeed/:chatId',
  //    views: {
  //      'tab-donezfeed': {
  //        templateUrl: 'templates/donezfeed-detail.html',
  //        controller: 'DonezfeedDetailCtrl'
  //      }
  //    }
  //  })
  //.state('tab.donezies', {
  //  url: '/donezies',
  //  views: {
  //    'tab-donezies': {
  //      templateUrl: 'templates/tab-donezies.html',
  //      controller: 'DoneziesCtrl'
  //    }
  //  }
  //})
  //
  //.state('tab.sos', {
  //    url: '/sos',
  //    views: {
  //      'tab-sos': {
  //        templateUrl: 'templates/tab-sos.html',
  //        controller: 'SOSCtrl'
  //      }
  //    }
  //  })
  //
  //  .state('tab.sos-compose', {
  //    url:'/sos/compose',
  //    views: {
  //      'tab-sos-compose': {
  //        templateUrl: 'templates/sos-compose.html',
  //        controller: 'SOSComposeCtrl'
  //      }
  //    }
  //  })
  //
  //  .state('tab.sos-detail', {
  //    url: '/sos/chat/:chatId',
  //    views: {
  //      'tab-sos': {
  //        templateUrl: 'templates/sos-detail.html',
  //        controller: 'SOSDetailCtrl'
  //      }
  //    }
  //  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/u');

});
