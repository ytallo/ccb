module.exports = function (scripts) {

    var pkg = require('../../../package.json'),
        version = pkg.version,
        script = 'js/' + pkg.name + '-' + version + '.js';

    scripts.index.push(script);

};