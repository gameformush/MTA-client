'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RemindCtrl
 * @description
 * # RemindCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('RemindCtrl',['$scope' ,'Restangular','$routeParams' , function ($scope, restangular, $routeParams) {
		switch ($routeParams.date) {
			case 'two-day':
				$scope.viewTwo = true;
				break;
			case 'week':
				$scope.viewWeek = true;
				break;
			case 'month':
				$scope.viewMonth = true;
				break;
			case 'three-month':
				$scope.viewThree = true;
				break;
		}

		restangular.service('remind').one($routeParams.date).get().then(function(data){
			$scope.logs = data;
		});

	}]);