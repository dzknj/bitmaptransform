const readFile = require('./handlefiles').readFile;
const EE = require('events');
const ee = new EE();

readFile('./palette-bitmap.bmp');
