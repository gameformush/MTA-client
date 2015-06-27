'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogViewCtrl
 * @description
 * # LogViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('LogViewCtrl',[ '$scope', 'Log', '$routeParams' , function ($scope, Log, $routeParams) {
		$scope.viewLog = true;
		Log.one($routeParams.id).get().then(function(data){
			function toDate(arr){
				return arr.map(function(time){
					return new Date(time);
				});
			}

			function combine(arr1, arr2) {
				var res = [];
				for(var i = 0; i < arr1.length; i++){
					var val = {
						start: arr1[i],
						end: arr2[i]
					};
					res.push(val);
				}
				return res;
			}

			data.times = combine(toDate(data.start), toDate(data.end));
			data.date = new Date(data.date);
			$scope.log = data;
		});
		}]);