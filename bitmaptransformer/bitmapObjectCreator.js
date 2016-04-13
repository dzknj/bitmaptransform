var bmoc = require('./bitmapObjectCreator');
var handleFiles = require('./handleFiles')
var fs = require('fs');
const EE = require('events');
var ee = new EE();

var myBitmapCreator = {};

const offSets = {
  bmpSize: 2, // in bytes
  pixelArrayStart: 10,
  headerSize: 14,
  width: 18, // in pixels
  height: 22, // in pixels
  bitsPerPixel: 28, // aka: color depth (ie:1,4,8,16,24,32)
  compression: 30, // compression method being used
  imageSize: 34, // in raw bmp data
  horizontalRes: 38, // horizontal resolution
  verticalRes: 42, // vertical resolution
  paletteColors: 46, // # of colors in palette
  importantColors: 50, // 0 when all are important
  paletteStart: 54 // first byte after header
};
// ee.on('makebitmapobj', function(data) {
  myBitmapCreator.Bitmap = function(yaread) { // ya is spanish for already
  debugger;
  this.buf = yaread;                        // ie: already read, yearead
  this.bmpSize = yaread.readUInt32LE(offSets.bmpSize);
  this.pixelArrayStart = yaread.readUInt32LE(offSets.pixelArrayStart);
  this.headerSize = yaread.readUInt32LE(offSets.headerSize);
  this.width = yaread.readUInt32LE(offSets.width);
  this.height = yaread.readUInt32LE(offSets.height);
  this.bitsPerPixel = yaread.readUInt32LE(offSets.bitsPerPixel);
  this.compression = yaread.readUInt32LE(offSets.compression);
  this.imageSize = yaread.readUInt32LE(offSets.imageSize);
  this.horizontalRes = yaread.readUInt32LE(offSets.horizontalRes);
  this.verticalRes = yaread.readUInt32LE(offSets.verticalRes);
  this.paletteColors = yaread.readUInt32LE(offSets.paletteColors);
  this.importantColors = yaread.readUInt32LE(offSets.importantColors);
  this.paletteStart = yaread.readUInt32LE(offSets.paletteStart);
};
ee.on('donereading', () =>{
  console.log(readFileBuf);
  var image = new myBitmapCreator.Bitmap(readFileBuf);
  console.log(image);
});
var readFileBuf = {};
function readFile(filePath, callback) {
fs.readFile(filePath, function(err, data) {
  if(err) console.log(err);
  readFileBuf = new Buffer(data);
  console.log(data);
  console.log(readFileBuf);
  ee.emit('donereading');
  return data;
});
}
readFile('./palette-bitmap.bmp');
// });
// var palette = new myBitmapCreator.Bitmap(handleFiles.readFile('./palette-bitmap.bmp'));
// console.log(palette);
// var image = new myBitmapCreator.Bitmap(readFile('./palette-bitmap.bmp'));
// console.log(image);
module.exports = myBitmapCreator;
