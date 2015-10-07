define(function (require) {
    'use strict';

    var angular = require('angular'),
            directive = require('./directive'),
            routeConfig = require('./route-config');

    require('angular.route');

    var module = angular.module('nxTeste', ["ngRoute"]);

    module.directive(directive.id, directive);

    module.config(routeConfig);

    return module;
});
