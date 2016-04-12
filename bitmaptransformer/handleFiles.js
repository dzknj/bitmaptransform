const fs = require('fs');

module.exports = {
  readFile: function(filePath) {
  fs.readFile(filePath, function(err, data) {
    if(err) console.log(err);
    // const paletteBuffer = new Buffer(data);
    // console.log(paletteBuffer);
    return data;
  });
}
};
