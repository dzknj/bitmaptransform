const fs = require('fs');
const EE = require('events');
const ee = new EE();

 function readFile(filePath, callback) {
    fs.readFile(filePath, function(err, data) {
      if(err) console.log(err);
      console.log(data);
      bitmapHeader(data);
      return data;
    });
  };
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
function bitmapHeader(yaread) { // ya is spanish for already
var headerInfo = {};
headerInfo.buf = yaread;                        // ie: already read, yearead
headerInfo.bmpSize = yaread.readUInt32LE(offSets.bmpSize);
headerInfo.pixelArrayStart = yaread.readUInt32LE(offSets.pixelArrayStart);
headerInfo.headerSize = yaread.readUInt32LE(offSets.headerSize);
headerInfo.width = yaread.readUInt32LE(offSets.width);
headerInfo.height = yaread.readUInt32LE(offSets.height);
headerInfo.bitsPerPixel = yaread.readUInt32LE(offSets.bitsPerPixel);
headerInfo.compression = yaread.readUInt32LE(offSets.compression);
headerInfo.imageSize = yaread.readUInt32LE(offSets.imageSize);
headerInfo.horizontalRes = yaread.readUInt32LE(offSets.horizontalRes);
headerInfo.verticalRes = yaread.readUInt32LE(offSets.verticalRes);
headerInfo.paletteColors = yaread.readUInt32LE(offSets.paletteColors);
headerInfo.importantColors = yaread.readUInt32LE(offSets.importantColors);
headerInfo.paletteStart = yaread.readUInt32LE(offSets.paletteStart);
console.log(headerInfo);
return(headerInfo);
};
exports.readFile = readFile;
exports.bitmapHeader = bitmapHeader;
