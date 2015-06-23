'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogCreateCtrl
 * @description
 * # LogCreateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogCreateCtrl', [ '$scope', 'Log', '$location', function ($scope, Log, $location) {
  	$scope.log = {};
  	$scope.saveLog = function () {
  		Log.post($scope.log).then(function(){
  			$location.path('/log');
  		});
  	};
  }]);
