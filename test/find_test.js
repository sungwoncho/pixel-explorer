var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('lodash');

var find = require('../lib/find');
var Explorer = require('../lib/explorer');

describe("find", function() {
  // Teardown
  afterEach(function() {
    Explorer.prototype._check.restore();
  });

  it("returns an array of pixel coordinates with the desired color", function(){
    // Setup
    sinon.stub(Explorer.prototype, '_check', function (x, y) {
      if (x === 131 && y === 140) {
        return true;
      }

      if (x === 133 && y === 142) {
        return true;
      }
    });

    var result = find(130, 140, 5, 'fafafa');

    expect(result.length).to.equal(2);
    expect(_.pluck(result, 'x')).to.include(131);
    expect(_.pluck(result, 'y')).to.include(140);
    expect(_.pluck(result, 'x')).to.include(133);
    expect(_.pluck(result, 'y')).to.include(142);
  });
});
