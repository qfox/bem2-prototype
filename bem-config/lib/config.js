'use strict';

var Q = require('q');

module.exports = function() {

    return this
        .title('config command')
        .helpful()
        .opt()
            .name('version')
            .title('Show version')
            .long('version')
            .flag()
            .only()
            .act(function() {
                var p = require('../package.json');
                return p.name + ' ' + p.version;
            })
            .end()
        .act(function(BEM) {
            return Q.resolve('It works!');
        });

};
