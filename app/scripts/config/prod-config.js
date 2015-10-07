require.config({
    baseUrl: 'scripts',
    paths: {
        'angular': '../lib/bower/angular/angular',
        'angular.route': '../lib/bower/angular-route/angular-route',
        'underscore': '../lib/bower/lodash/lodash',
        'text': '../lib/bower/requirejs-text/text',
        'jquery': '../lib/bower/jquery/dist/jquery'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular.route': ['angular']
    }
});
