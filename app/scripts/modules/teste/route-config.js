define(function (require) {
    'use strict';

    var demoRoute = require('./route');

    var routeConfig = function ($routeProvider) {
        $routeProvider
                .when('/teste', demoRoute);
    };

    routeConfig.$inject = ['$routeProvider'];

    return routeConfig;
});
