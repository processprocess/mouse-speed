var MouseSpeed = require("../../src/mouse-speed.js");
// var MouseSpeed = require("mouse-speed");

var speed = new MouseSpeed();

var speedFunc = function() {
  console.log(speed.speedX, speed.speedY);
};

speed.init(speedFunc);

var onDestroyFunc = function() {
  console.log("destroyed");
};

var cancel = document.createElement("button");
cancel.innerHTML = "destroy";
cancel.addEventListener("click", () => {
  speed.destroy(onDestroyFunc);
});
document.body.append(cancel);
