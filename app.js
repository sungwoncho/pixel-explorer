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

module.exports = {
  run: function (x, y, color) {
    var explorer = new Explorer(x, y, color);
    var result = [];
    var runCount = 1;
    var root = explorer.position;

    // Check color at root
    explorer.checkColor();

    while (runCount < 7) {
      explorer.updatePosition(root.x + runCount, root.y);
      explorer.checkColor();

      explorer.updatePosition(root.x, root.y + runCount);
      explorer.checkColor();

      explorer.updatePosition(root.x + runCount, root.y + runCount);
      explorer.checkColor();

      // Check colors of unexplored spots
      for (var i = 1; i < runCount; i++) {
        explorer.traverseX(-1);
        explorer.checkColor();
      }

      explorer.updatePosition(root.x + runCount, root.y + runCount);

      for (var j = 1; j < runCount; j++) {
        explorer.traverseY(-1);
        explorer.checkColor();
      }

      runCount++;
    }

    return explorer.result;
  }
};
