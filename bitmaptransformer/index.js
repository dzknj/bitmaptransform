// var transform = require('./transform');
const handleFiles = require('./handleFiles');
const myBitmapCreator = require('./bitmapObjectCreator');
const EE = require('events');
const ee = new EE();

function run() {
var bmpBuffer = handleFiles.readFile('./palette-bitmap.bmp');
var bmpObject = new myBitmapCreator.Bitmap(bmpBuffer);
// var palette = new myBitmapCreator.Bitmap(handleFiles.readFile('./palette-bitmap.bmp'));
// console.log(palette);
};
run();
