var robot = require('robotjs');

var Explorer = require('./explorer');

module.exports = function (x, y, targetColor, size) {
  var explorer = new Explorer(targetColor);
  var runCount = 1;

  // Check color at root
  explorer.findAt(x, y);

  while (runCount <= size) {
    // Traverse horizontally, vertically, and diagonally
    explorer.findAt(x + runCount, y);
    explorer.findAt(x, y + runCount);
    explorer.findAt(x + runCount, y + runCount);

    // Check colors of unexplored spots
    for (var i = 1; i < runCount; i++) {
      explorer.findAt(x + runCount - i, y + runCount);
    }
    for (var j = 1; j < runCount; j++) {
      explorer.findAt(x + runCount, y + runCount - j);
    }

    runCount++;
  }

  return explorer.pixelsFound;
};
