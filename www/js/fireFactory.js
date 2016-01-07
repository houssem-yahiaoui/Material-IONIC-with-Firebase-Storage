(function() {
  'use strict';
  angular.module('devfest').factory('fireFact', ['$firebaseArray', function ($firebaseArray) {
    var membersRef = new Firebase('https://gdg-algeries-devfest.firebaseio.com/members');
    return $firebaseArray(membersRef);
  }]);
}());
