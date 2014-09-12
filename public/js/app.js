'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        controller: 'userCtrl'
        // controller: 'PostsCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/blog-list.html',
        controller: 'chatCtrl'
  });
