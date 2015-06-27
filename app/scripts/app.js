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
    'restangular',
    'ngHumane',
    'hc.marked'
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
      .when('/remind/:date', {
        templateUrl: 'views/remind.html',
        controller: 'RemindCtrl'
      })
      .when('/activities', {
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl'
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

angular.module('ngHumane', [])
  .factory('$humane', function(){
    var nghumane = new humane.create({timeout: 2500, baseCls: 'humane-jackedup'});
    nghumane.error = function(html, o, cb) {
      humane.log(html, o, cb, {addnCls: 'humane-jackedup-error', clickToClose: true});
    };
    nghumane.info = function(html, o, cb) {
      humane.log(html, o, cb, {addnCls: 'humane-jackedup-info'});
    };
    nghumane.success = function(html, o, cb) {
      humane.log(html, o, cb, {addnCls: 'humane-jackedup-success'});
    };
    return nghumane;
});