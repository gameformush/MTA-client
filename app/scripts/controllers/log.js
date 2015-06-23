'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogCtrl', ["$scope", "Log", function ($scope, Log) {
     $scope.logs = Log.getList().$object;
    }]);
