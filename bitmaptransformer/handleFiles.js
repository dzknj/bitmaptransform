const fs = require('fs');
const EE = require('events');
const ee = new EE();

module.exports = {
  readFile: function(filePath, callback) {
  fs.readFile(filePath, function(err, data) {
    if(err) console.log(err);
    // const paletteBuffer = new Buffer(data);
    // console.log(paletteBuffer);
    console.log(data);
    return data;
    // ee.emit('makebitmapobj', data);
    // return data;
  });
}
};
