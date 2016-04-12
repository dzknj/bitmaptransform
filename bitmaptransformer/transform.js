var http = require('http');
var fs = require('fs');

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
  paleteColors: 46, // # of colors in palette
  importantColors: 50, // 0 when all are important
  paletteStart: 54 // first byte after header
};
for(var key in offSets) {
  console.log(key)
};
fs.readFile('./palette-bitmap.bmp', function(err, data) {
  if(err) console.log(err);
  // http.createServer(function(request, response) {
  //   response.writeHead(200, {'Content-Type': 'image/bmp'});
  //   response.end(data);
  // }).listen(8888);
  var buf = new Buffer(data);
  console.log(buf);
  console.log(typeof(buf));
  console.log(Buffer.byteLength(buf));

  var headerBuf = new Buffer(55);
  var headerPalette = buf.slice(0,55);
  headerPalette.copy(headerBuf,0);
  console.log(headerBuf);
  console.log(typeof(headerBuf));
  console.log(Buffer.byteLength(headerBuf));

  console.log(buf.readUInt32LE(10));
  console.log(buf.readUInt32LE(46));
  console.log((buf.readUInt32LE(10) - 54)/256);
  // console.log('server running at localhost 8888')
});
