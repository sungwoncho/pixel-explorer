var robot = require('robotjs');
var _ = require('lodash');

var Table = require('cli-table');
var color = require('color');
var find = require('./find');

module.exports = function (x, y, size, color) {
  var pixels;

  if (color) {
    pixels = find(x, y, size, color);
  } else {
    pixels = explore(x, y, size);
  }

  var xMax = _.max(pixels, function (pos) {
    return pos.x;
  }).x;
  var xMin = _.min(pixels, function (pos) {
    return pos.x;
  }).x;
  var yMax = _.max(pixels, function (pos) {
    return pos.y;
  }).y;
  var yMin = _.min(pixels, function (pos) {
    return pos.y;
  }).y;

  //Use cli-table API to draw a table
  var heads = [""];
  for (var i = xMin; i <= xMax; i++) {
    heads.push(i);
  }
  var table = new Table({head: heads});

  for (var j = yMin; j <= yMax; j++) {
      var row = {};
      row[j] = [];
      for (var k = 0; k <= xMax - xMin; k++) {
        row[j][k] = '';
      }

      var targetPos = _.filter(pixels, function (position) {
        return position.y === j;
      });

      var xCoordinates = _.pluck(targetPos, 'x');

      xCoordinates.forEach(function (xCoordinate) {
        var index = xCoordinate - xMin;
        row[j][index] = 'X';
      });

      table.push(row);
  }

  console.log(table.toString());
};
