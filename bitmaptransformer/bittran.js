
var fs = require('fs');
var EE = require('events').EventEmitter;

var fileEvents = new EE();

var Transform = module.exports = function(){

	this.readFile = function(file, callback) {
	  fs.readFile(file, function(err, data) {
	    if (err) return console.log(err);
			callback(null, data);
	    fileEvents.emit('donebitmap', data);
	  });
	};
};
