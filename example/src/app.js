import MouseSpeed from "../../src/mouse-speed.js";

let speed = new MouseSpeed();
speed.init(() => console.log(speed.speedX, speed.speedY));

window.speed = speed;

let cancel = document.createElement("button");
cancel.innerHTML = "destroy";
cancel.addEventListener("click", () => {
  speed.destroy();
});
document.body.append(cancel);
