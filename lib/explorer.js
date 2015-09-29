var robot = require('robotjs');

var Explorer = function (targetColor) {
  this.targetColor = targetColor;
  this.pixelsFound = [];
};

Explorer.prototype._check = function (x, y) {
  var currentColor = robot.getPixelColor(x, y);

  return currentColor === this.targetColor;
};

Explorer.prototype.findAt = function (x, y) {
  if (this._check(x, y)) {
    var pixel = {x: x, y: y};

    this.pixelsFound.push(pixel);
  }
};

module.exports = Explorer;
