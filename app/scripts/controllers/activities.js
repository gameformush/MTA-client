'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ActivitiesCtrl',['$scope', 'Log', 'actvTrack', function ($scope, Log, actvTrack) {
  	$scope.logs = [];
    actvTrack.then(function(ids){
    	var _len = ids.length;
    	for(var i = 0; i < _len; i++){
    		$scope.logs[i] = Log.one(ids[i]).get().$object;
    	}
    });
  }]);
