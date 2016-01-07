'use strict';

var newMemberCrtl = function ($scope, membersFact, $state, ionicMaterialInk) {
 $scope.addContent = function () {
console.log($scope.fname);

    membersFact.addData($scope.fname, $scope.lname).then(function (e) {
      $state.go('members');
    });
  }
  //var ref = fireFact;
  /*$scope.addContent = function () {

  /*  membersRef.$add({
      'fname' : $scope.fname,
      'lname' : $scope.lname
    });*/
    /*console.log($scope.fname);
    console.log($scope.lname);
    membersFact.addData($scope.fname, $scope.lname).then(function() {
      console.log("done");
      console.log($scope.fname);
      console.log($scope.lname);
      $state.go('members');
    });*/

//  }
  ionicMaterialInk.displayEffect();

}

newMemberCrtl.inject = ['$scope', '$state', 'membersFact', 'ionicMaterialInk'];

angular.module('devfest').controller('newMemberCrtl', newMemberCrtl);
