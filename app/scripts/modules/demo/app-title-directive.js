define(function (require) {
    'use strict';

    var template = require('text!modules/demo/title.html');

    var directive = function () {
        return {
            restrict: 'E',
            template: template
        };
    };

    directive.id = 'appTitle';

    return directive;
});
