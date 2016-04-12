var bmoc = require('./bitmapObjectCreator');
var handleFiles = require('./handleFiles')
var fs = require('fs');

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
myBitmapCreator.Bitmap = function(yaread) { // ya is spanish for already
  debugger;
  this.buf = yaread;                        // ie: already read, yearead
  this.bmpSize = yaread.readUInt32LE(bmpSize);
  this.pixelArrayStart = yaread.readUInt32LE(pixelArrayStart);
  this.headerSize = yaread.readUInt32LE(headerSize);
  this.width = yaread.readUInt32LE(width);
  this.height = yaread.readUInt32LE(height);
  this.bitsPerPixel = yaread.readUInt32LE(bitsPerPixel);
  this.compression = yaread.readUInt32LE(compression);
  this.imageSize = yaread.readUInt32LE(imageSize);
  this.horizontalRes = yaread.readUInt32LE(horizontalRes);
  this.verticalRes = yaread.readUInt32LE(verticalRes);
  this.paletteColors = yaread.readUInt32LE(paletteColors);
  this.importantColors = yaread.readUInt32LE(importantColors);
  this.paletteStart = yaread.readUInt32LE(paletteStart);
};

// var palette = new myBitmapCreator.Bitmap(handleFiles.readFile('./palette-bitmap.bmp'));
// console.log(palette);

module.exports = myBitmapCreator;
