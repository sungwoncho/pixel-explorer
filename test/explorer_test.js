var expect = require('chai').expect;
var sinon = require('sinon');

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

      // Teardown
      explorer._check.restore();
    });
  });
});
