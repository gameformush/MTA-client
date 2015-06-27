'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('LogCtrl', ['$scope', 'Log', 'Restangular', '$humane' , function ($scope, Log, $restangular, $humane) {
		 $scope.logs = Log.getList().$object;


		 $scope.start = function(id) {
			$restangular.one('activities').all('start').post({'_id': id}).then(function(){
				$humane.success('Start activiti');
			}, function(){
				$humane.error('Already started or not exist');
			});
		 };

		 $scope.stop = function(id) {
			$restangular.one('activities').all('stop').post({'_id': id}).then(function(){
				$humane.success('Stoping activiti');
			}, function(){
				$humane.error('Already stopped or not exist');
			});
		 };
		}]);