'use strict';

angular

/**
 * Initialize the main module
 *
 * All child modules must be included here
 */
  .module('${app}', [
    'gaigUiBootstrap',
    'ngRoute',
    require('./modules/common').name,
    require('./modules/header').name,
    require('./modules/footer').name,
    require('./modules/404').name,
    require('./modules/home').name
  ])

/**
 * Config
 */
  .config(function appConfig($routeProvider) {

    /**
     * Catch undefined routes and redirect to 404
     */
    $routeProvider.otherwise({
      redirectTo: '404'
    });

  });