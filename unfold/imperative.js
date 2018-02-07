'use strict'

const _ = require('lodash');
const pointInSvgPolygon = require('point-in-svg-polygon');

const insidePolygon = (d) => {
  const segments = pointInSvgPolygon.segments(d);
  return (x, y) => pointInSvgPolygon.isInside([x, y], segments);
};

const getPathRectFromPoint = (d, {x, y}) => {
  // get the width and height from the center-point provided - find the left and right most x
  // on the given y axis, and find the top and bottom most y on the given x axis
  const inside = insidePolygon(d);

  let xMin = x;
  while (inside(xMin - 1, y)) {
    xMin--;
  }

  let xMax = x;
  while (inside(xMax + 1, y)) {
    xMax++;
  }

  let yMin = y;
  while (inside(x, yMin - 1)) {
    yMin--;
  }

  let yMax = y;
  while (inside(x, yMax + 1)) {
    yMax++;
  }

  return {
    x: _.round(xMin, 2),
    y: _.round(yMin, 2),
    width: _.round(xMax - xMin, 2),
    height: _.round(yMax - yMin, 2)
  };
};

const d = 'M5006.46,1798.53L5006.46 1798.53 5006.46 1077.53 5624.37 1077.53 5624.37 1798.53 5006.46 1798.53z';
const point = {x: 5315.415, y: 1438.03};

console.log(
  getPathRectFromPoint(d, point)
);

// in case you're curious about <path d="">'s format
// M - move to x,y
// L - line to x,y
// Z - draw a line from the current position back to the start of L
