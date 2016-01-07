(function() {
  'use strict';
  angular.module('devfest').factory('Auth', ['$firebaseAuth', function ($firebaseAuth) {
    var ref = new Firebase('https://gdg-algeries-devfest.firebaseio.com/');
    return $firebaseAuth(ref);
  }])

}());
