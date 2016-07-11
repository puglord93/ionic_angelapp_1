angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.browse', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/browse.html',
        controller: 'browseCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('main', {
    url: '/page1',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('Angel', {
    url: '/page8',
    templateUrl: 'templates/Angel.html',
    controller: 'AngelCtrl'
  })

$urlRouterProvider.otherwise('/page8')

  

});