const fs = require('fs');
const EE = require('events');
const ee = new EE();

 function readFile(filePath, callback) {
    fs.readFile(filePath, function(err, data) {
      if(err) console.log(err);
      console.log('54 byte header infor of bitmap file in hex: ' + data.toString('hex').slice(0,108));
      bitmapHeader(data);
      transform(data);
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
function transform(data) {
  var newBitmapData = [];
  for(var i = 0; i < data.length; i++) {
    data[i] = data.readUInt8(i);
    newBitmapData.push(data[i]);
  };
  for (var i = 54; i < newBitmapData.length; i++) {
    if(newBitmapData[i] % 2) { // any pixel color that is divisible by 2 with no remainder is given a random color
      newBitmapData[i] = Math.floor(Math.random() * 255);
    };
  };
  createBitmap(newBitmapData);
};
function createBitmap(newBitmapData) {
  var transformedBitmap = new Buffer(newBitmapData);
  fs.writeFile("img/transformed-bitmap.bmp", transformedBitmap, function(err) {
    if(err) {
      return console.log(err);
    };
    console.log("bitmap file has been transformed!");
  });
};
exports.readFile = readFile;
exports.bitmapHeader = bitmapHeader;
exports.transform = transform;
exports.createBitmap = createBitmap;
