var robot = require('robotjs');
var Explorer = require('./explorer');

module.exports = function (x, y, size) {
  var explorer = new Explorer();
  var runCount = 1;

  // Check color at root
  explorer.exploreAt(x, y);

  while (runCount <= size) {
    // Traverse horizontally, vertically, and diagonally
    explorer.exploreAt(x + runCount, y);
    explorer.exploreAt(x, y + runCount);
    explorer.exploreAt(x + runCount, y + runCount);

    // Check colors of unexplored spots
    for (var i = 1; i < runCount; i++) {
      explorer.exploreAt(x + runCount - i, y + runCount);
    }
    for (var j = 1; j < runCount; j++) {
      explorer.exploreAt(x + runCount, y + runCount - j);
    }

    runCount++;
  }

  return explorer.pixelsFound;
};
