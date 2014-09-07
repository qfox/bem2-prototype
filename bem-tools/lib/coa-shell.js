'use strict';

var Q = require('q'),
    CP = require('child_process');

Q.longStackJumpLimit = 0;

module.exports = function () {
    this.act(function () {

        var defer = Q.defer(),
            readline = require('readline'),
            rl = readline.createInterface(process.stdin, process.stdout),
            prefix = '> ';
        rl.setPrompt(prefix, prefix.length);

        rl.on('line', function(line) {
            line = line.trim();
            if (!line) {
                rl.prompt();
                return;
            }
            var child = CP.spawn(process.argv[0],
                process.argv.slice(1, 2).concat(line.split(' ')),
                { cwd: process.cwd(), customFds: [-1, 1, 2] });
            child.on('exit', function() {
                rl.prompt();
            });
        })
        .on('close', function() {
            console.log('');
            process.stdin.destroy();
            defer.resolve();
        });

        /* jshint -W109 */
        console.log("Type '--help' for help, press ctrl+d or ctrl+c to exit");
        /* jshint +W109 */
        rl.prompt();

        return defer.promise;

    });
};
