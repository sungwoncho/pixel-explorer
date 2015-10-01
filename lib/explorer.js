var robot = require('robotjs');
var Pixel = require('./pixel');

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
    var pixel = new Pixel(x, y, this.targetColor);

    this.pixelsFound.push(pixel);
  }
};

Explorer.prototype.exploreAt = function (x, y) {
  var pixelColor = robot.getPixelColor(x, y);
  var pixel = new Pixel(x, y, pixelColor);

  this.pixelsFound.push(pixel);
};

module.exports = Explorer;
