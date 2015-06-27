'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogEditCtrl
 * @description
 * # LogEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('LogEditCtrl', ['$scope', '$routeParams', 'Log', '$location', function ($scope, $routeParams, Log, $location) {
			$scope.editLog = true;
			Log.one($routeParams.id).get().then(function(log){
				$scope.log = log;
				$scope.saveLog = function() {
					$scope.log.put().then(function(){
						$location.path('/log/' + $routeParams.id);
					});
				};
			});
	}]);
