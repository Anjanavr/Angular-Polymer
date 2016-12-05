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
      	"firstName": "Darryl",
        "lastName": "Caldwell",
        "state": "Delaware",
        "email": "darryl.caldwell@example.com",
        "phone": "0519190654"
      },
      {
        "firstName": "Phoebe",
        "lastName": "Evans",
        "state": "Indiana",
        "email": "phoebe.evans@example.com",
        "phone": "0315809758"
      }
    ];
});
