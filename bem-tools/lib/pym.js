'use strict';

var PATH = require('path'),
	PYM = require('pym'),

	rootpath,
	app;

// um? how to pass it here?
rootpath = PATH.dirname(process.mainModule.filename);

app = PYM(rootpath);
app.use([
	'bem-config',
	'bem-level'
])
.on('ready', function (modules) {
	// ready

	console.log(modules);

});

module.exports = app;
