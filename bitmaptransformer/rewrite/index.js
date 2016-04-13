const readFile = require('./handlefiles').readFile;
const EE = require('events');
const ee = new EE();

readFile('./img/' + process.argv[2]);
