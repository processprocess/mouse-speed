"use strict";

var oldX = 0;
var oldY = 0;
var timerId = void 0;

var mouseSpeed = function mouseSpeed(e) {
  var object = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


  clearTimeout(timerId);

  timerId = setTimeout(function () {
    object.speedX = 0;
    object.speedY = 0;
  }, 50);

  var speedX = e.clientX - oldX;
  var speedY = e.clientY - oldY;

  oldX = e.clientX;
  oldY = e.clientY;

  object.speedX = speedX;
  object.speedY = speedY;

  return { x: speedX, y: speedY };
};

module.exports = mouseSpeed;
