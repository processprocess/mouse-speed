# mouse-speed

Calculates mouse speed via the event object, returning x and y speed values as an object.

## Usage

[![NPM](https://nodei.co/npm/mouse-speed.png)](https://nodei.co/npm/mouse-speed/)

mouse-speed can be used in two ways:

### `speed(e)`

```js
const mouseSpeed = require('mouse-speed');

window.addEventListener('mousemove', (e) => {
  const speed = mouseSpeed(e);
  console.log(speed.x, speed.y);
})
```

Put mouse-speed in a `mousemove` event and pass it the event object.

Speed is calculated and returned as an object with x and y values.

### `speed(e, object)`

```js
const mouseSpeed = require('mouse-speed');

const speedTracker = {};

window.addEventListener('mousemove', (e) => {
  const speed = mouseSpeed(e, speedTracker);
  console.log(speedTracker.speedX, speedTracker.speedY);
})
```

Optionally, An object can be passed to it.

This object will now have two new values, accessible as speedX and speedY.

## License

MIT, see [LICENSE.md](http://github.com/processprocess/mouse-speed/blob/master/LICENSE.md) for details.