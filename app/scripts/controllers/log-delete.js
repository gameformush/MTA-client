'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogDeleteCtrl
 * @description
 * # LogDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogDeleteCtrl',[ '$scope', '$routeParams', '$location', 'Log', function ($scope, $routeParams, $location, Log) {
    	$scope.log = Log.one($routeParams.id).get().$object;
    	$scope.deleteLog = function() {
    		$scope.log.remove().then(function(){
    			$location.path('/log');
    		});
    	};
    	$scope.back = function() {
    		$location.path('/log/' + $routeParams.id);
    	};
  }]);
