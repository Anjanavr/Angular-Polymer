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
    $scope.employees = [{
    	name: 'Abc',
      age: 21
    }, {
      name: 'Cde',
      age: 32
    }];
});
