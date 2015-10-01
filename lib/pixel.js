var Pixel = function (x, y, color) {
  this.x = x;
  this.y = y;

  if (color) {
    this.color = color;
  }
};

module.exports = Pixel;
