'use strict';

var membersListCrtl = function($scope, $ionicListDelegate, $ionicSideMenuDelegate, $state, membersFact, ionicMaterialMotion) {
  console.log(membersFact.getData());
  //$scope.items = fireFact;
  membersFact.getData().then(function (data) {
    $scope.items = data;
  /*  document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
    setTimeout(function() {
        ionicMaterialMotion.fadeSlideIn();
    }, 1500);*/
  })

/*$scope.items = fireFact;
  document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
  ionicMaterialMotion.fadeSlideIn();*/

  $scope.logSomething = function () {
    console.log("Its WOrking !!");
  }

  $scope.createNewMember = function () {
    $state.go('new');
  }

};

membersListCrtl.$inject = ['$scope', '$ionicListDelegate', '$ionicSideMenuDelegate', '$state', 'membersFact', 'ionicMaterialMotion'];
angular.module('devfest').controller('membersListCrtl', membersListCrtl);
