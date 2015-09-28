var robot = require('robotjs');
var _ = require('lodash');

var Table = require('cli-table');
var color = require('color');
var explore = require('./explore');

module.exports = function (x, y, color) {
  var result = explore(x, y, color);

  var xMax = _.max(result, function (pos) {
    return pos.x;
  }).x;
  var xMin = _.min(result, function (pos) {
    return pos.y;
  }).x;
  var yMax = _.max(result, function (pos) {
    return pos.y;
  }).y;
  var yMin = _.min(result, function (pos) {
    return pos.y;
  }).y;

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

      var targetPos = _.filter(result, function (position) {
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
