'use strict';

var VOW = require('vow');
var CP = require('child_process');

module.exports = function () {

    this.act(function () {
        var defer = VOW.defer();
        var readline = require('readline');
        var rl = readline.createInterface(process.stdin, process.stdout);
        var prefix = '> ';

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

        return defer.promise();

    });

};
