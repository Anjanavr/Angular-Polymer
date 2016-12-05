'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.employees = [
      {
      	"firstName": "darryl",
        "lastName": "caldwell",
        "state": "delaware",
        "email": "darryl.caldwell@example.com",
        "phone": "0519190654"
      },
      {
        "firstName": "phoebe",
        "lastName": "evans",
        "state": "indiana",
        "email": "phoebe.evans@example.com",
        "phone": "0315809758"
      }
    ];
});
