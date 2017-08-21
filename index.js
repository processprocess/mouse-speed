let oldX = 0;
let oldY = 0;
let timerId;

let mouseSpeed = (e, object = {}) => {

  clearTimeout(timerId);

  timerId = setTimeout(() => {
    object.speedX = 0;
    object.speedY = 0;
  }, 50 );

  let speedX = e.clientX - oldX;
  let speedY = e.clientY - oldY;

  oldX = e.clientX;
  oldY = e.clientY;

  object.speedX = speedX;
  object.speedY = speedY;

  return { x: speedX, y: speedY }
}

module.exports = mouseSpeed;