'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogViewCtrl
 * @description
 * # LogViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogViewCtrl',[ '$scope', 'Log', '$routeParams', function ($scope, Log, $routeParams) {
    	$scope.viewLog = true;
    	$scope.log = Log.one($routeParams.id).get().$object;
    }]);
