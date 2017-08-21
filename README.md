# mouse-speed

Calculates mouse speed via the event object, returning x and y speed values as an object.

## Usage

[![NPM](https://nodei.co/npm/mouse-speed.png)](https://nodei.co/npm/mouse-speed/)

### `speed(e)`

```js
const mouseSpeed = require('mouse-speed');

window.addEventListener('mousemove', (e) => {
  const speed = mouseSpeed(e);
  console.log(speed.x, speed.y);
})
```

To be used in the `mousemove` event.

By passing in the event object, speed is calculated and returned as an object with x and y values.

### `speed(e, object)`

```js
const mouseSpeed = require('mouse-speed');

const speedTracker = {};

window.addEventListener('mousemove', (e) => {
  const speed = mouseSpeed(e, speedTracker);
  console.log(speedTracker.speedX, speedTracker.speedY);
})
```

An object can be passed as an optional parameter.

This object will now have two new values accessible as `object.speedX` and `object.speedY`.

## License

MIT, see [LICENSE.md](http://github.com/processprocess/mouse-speed/blob/master/LICENSE.md) for details.