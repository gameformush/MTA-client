'use strict';

/**
 * @ngdoc service
 * @name clientApp.actvTrack
 * @description
 * # actvTrack
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('actvTrack',['Log', 'Restangular' , function (Log, $restangular) {
		return $restangular.one('activities').get();
}]);
