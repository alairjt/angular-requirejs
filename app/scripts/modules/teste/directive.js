define(function (require) {
    'use strict';

    var template = require('text!modules/teste/title.html');

    var directive = function () {
        return {
            restrict: 'E',
            template: template
        };
    };

    directive.id = 'nxTeste';

    return directive;
});
