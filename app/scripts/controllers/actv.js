'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ActvctrlCtrl
 * @description
 * # ActvctrlCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ActvCtrl',[ '$scope', 'actvTrack', function ($scope, actvTrack) {
  	actvTrack.then(function(ids){
  		$scope.len = ids.length;
  	});
  }]);
