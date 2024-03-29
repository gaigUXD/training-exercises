'use strict';

module.exports = angular.module('${app}.home', [])

  .controller('HomeCtrl', require('./controllers/home.controller'))

  .config(function homeConfig($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: 'templates/home.html',
        pageTitle: 'Welcome'
      });

  });