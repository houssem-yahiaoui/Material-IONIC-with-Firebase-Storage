// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('devfest', ['ionic', 'ionic-material', 'ng-mfb', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/members');

  $stateProvider
    .state('home', {
      url : '/home',
      templateUrl: '../template/home.html',
      controller : 'homeCrtl'
    })
    .state('login', {
      url: '/login',
      templateUrl : '../template/login.html',
      controller : 'loginCrtl'
    })
    .state('members', {
      url: '/members',
      templateUrl : '../template/membersList.html',
      controller: 'membersListCrtl'
    })
    .state('new', {
      url: '/newm',
      templateUrl : '../template/new.html',
      controller : 'newMemberCrtl'
    });

})

.run(function(ionicMaterialInk, ionicMaterialMotion) {
  ionicMaterialInk.displayEffect();
  ionicMaterialMotion.ripple();
});
