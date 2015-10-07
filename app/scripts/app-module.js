var modules = [
    'modules/demo/demo-module',
    'modules/teste/module'
];

define(modules, function () {
    var modulesName = [];
    for (var key in arguments) {
        if (arguments[key] && arguments[key].name) {
            modulesName.push(arguments[key].name);
        }
    }

    return {
        modules: modulesName
    };
});