'use strict';

var PATH = require('path');

module.exports = require('coa').Cmd()
    .name(PATH.basename(process.argv[1]))
    .title(['Tools to work with files written using the BEM-method.', '' +
        'See http://bem.github.com/bem-method/ for more info.'].join('\n'))

    .helpful()

    .opt()
        .name('version').title('Show version')
        .short('v').long('version')
        .flag()
        .only()
        .act(function() {
            return require('../package.json').version;
        })
        .end()

    .completable()

    // todo: fix this up when veged/coa#40 will be resolved
    .apply(require('./coa-shell.js'));
