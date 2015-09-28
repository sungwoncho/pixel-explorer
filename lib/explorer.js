var robot = require('robotjs');

var Explorer = function (x, y, color) {
  this.position = {x: x, y: y};
  this.targetColor = color;
  this.result = [];
};

Explorer.prototype.updatePosition = function (x, y) {
  this.position = {x: x, y: y};
};

Explorer.prototype.traverseX = function (val) {
  this.updatePosition(this.position.x + val, this.position.y);
};

Explorer.prototype.traverseY = function (val) {
  this.updatePosition(this.position.x, this.position.y + val);
};

Explorer.prototype.checkColor = function () {
  var currentColor = robot.getPixelColor(this.position.x, this.position.y);

  if (currentColor === this.targetColor) {
    this.result.push(this.position);
  }
};

module.exports = Explorer;
