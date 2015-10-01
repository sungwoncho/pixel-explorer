var expect = require('chai').expect;
var sinon = require('sinon');
var robot = require('robotjs');

var Explorer = require('../lib/explorer');

describe("Explorer", function(){
  describe("#findAt", function(){
    it("saves the pixel in pixelsFound if color matches", function(){
      // Setup
      var explorer = new Explorer('fafafa');
      sinon.stub(explorer, '_check', function () {
        return true;
      });

      explorer.findAt(300, 125);

      var result = explorer.pixelsFound[0];
      expect(result.x).to.equal(300);
      expect(result.y).to.equal(125);
    });
  });

  describe("#exploreAt", function(){
    it("saves the pixels in pixelsFound", function(){
      var explorer = new Explorer();

      sinon.stub(robot, 'getPixelColor', function (x, y) {
        if (x === 1 && y === 2) {
          return 'ffffff';
        }
      });

      explorer.exploreAt(1,2);

      expect(explorer.pixelsFound[0].x).to.equal(1);
      expect(explorer.pixelsFound[0].y).to.equal(2);
    });
  });
});
