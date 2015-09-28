var robot = require('robotjs');
var _ = require('lodash');

var Explorer = require('./explorer');

module.exports = function (x, y, color, size) {
  var explorer = new Explorer(x, y, color);
  var result = [];
  var runCount = 1;
  var root = explorer.position;

  // Check color at root
  explorer.checkColor();

  while (runCount <= size) {
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
};
