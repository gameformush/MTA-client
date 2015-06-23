'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:8080');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/log', {
        templateUrl: 'views/log.html',
        controller: 'LogCtrl'
      })
      .when('/log/:id/edit', {
        templateUrl: 'views/log-edit.html',
        controller: 'LogEditCtrl'
      })
      .when('/create/log', {
        templateUrl: 'views/log-add.html',
        controller: 'LogCreateCtrl'
      })
      .when('/log/:id', {
        templateUrl: 'views/log-view.html',
        controller: 'LogViewCtrl'
      })
      .when('/log/:id/delete', {
        templateUrl: 'views/log-delete.html',
        controller: 'LogDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('LogRestangular',function (Restangular) {
  
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory( 'Log',[ 'LogRestangular' ,function (LogRestangular) {
      return LogRestangular.service('log');
    }]);