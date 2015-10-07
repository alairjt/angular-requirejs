define(['angular', 'routes/route-config', 'app-module'], function (angular, routeConfig, appModules) {
    'use strict';
    
    var app = angular.module('H2', appModules.modules);

    app.config(routeConfig);

    return app;
});
