// var transform = require('./transform');
const handleFiles = require('./handleFiles');
const myBitmapCreator = require('./bitmapObjectCreator');

function run() {
var bmpBuffer = handleFiles.readFile('./palette-bitmap.bmp');
var bmpObject = new myBitmapCreator.Bitmap(bmpBuffer);
};
run();
