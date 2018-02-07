'use strict'

const _ = require('lodash');
const pointInSvgPolygon = require('point-in-svg-polygon');
const unfold = require('unfold-with');

const insidePolygon = (d) => {
  const segments = pointInSvgPolygon.segments(d);
  return ({x, y}) => pointInSvgPolygon.isInside([x, y], segments);
};

const getPathRectFromPoint = (d, centerPoint) => {
  // get the width and height from the center-point provided - find the left and right most x
  // on the given y axis, and find the top and bottom most y on the given x axis
  const inside = insidePolygon(d);

  const {x: xMin} = unfold((p) => inside(p) ? {value: p, nextValue: {...p, x: p.x - 1}} : null, centerPoint).pop();
  const {x: xMax} = unfold((p) => inside(p) ? {value: p, nextValue: {...p, x: p.x + 1}} : null, centerPoint).pop();
  const {y: yMin} = unfold((p) => inside(p) ? {value: p, nextValue: {...p, y: p.y - 1}} : null, centerPoint).pop();
  const {y: yMax} = unfold((p) => inside(p) ? {value: p, nextValue: {...p, y: p.y + 1}} : null, centerPoint).pop();

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
// Z - draw a line from the current position back to M
