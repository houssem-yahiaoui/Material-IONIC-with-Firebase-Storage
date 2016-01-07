(function() {
  'use strict';
  angular.module('devfest').factory('membersFact', function($q, fireFact) {
    var dat = fireFact;
    return {
      getData : function (){
        var pro = $q.defer();
        /*for (var i = 0; i < 5; i++) {
          dat[i] = {
            'fname' : Faker.Name.firstName(),
            'lname' : Faker.Name.lastName()
          };
        }*/
        pro.resolve(dat);
        return pro.promise;
      },

      addData : function (fname, lname) {
        var pro = $q.defer();
        dat.$add({
          "fname" : fname,
          "lname" : lname
        })
        pro.resolve(dat);
        return pro.promise
      }
    }
  })

}());
