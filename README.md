# mouse-speed

Calculates mouse speed during the `mousemove` event.

[![NPM](https://nodei.co/npm/mouse-speed.png)](https://nodei.co/npm/mouse-speed/)

## Usage

```js
var MouseSpeed = require("mouse-speed");
var speed = new MouseSpeed();

var onCalcSpeed = function() {
    console.log(speed.speedX, speed.speedY);
};

speed.init(onCalcSpeed);
```

Create a new instance of mouse-speed in your project.

The speed values are accessed through the `speedX` and `speedY` properties on the instance.

The function passed to the instance will fire on every mousemove event.

```js
var onDestroyFunc = function() {
    console.log("destroyed");
};

speed.destroy(onDestroyFunc);
```

To remove the event listener, call `destroy` on the instance of mouse-speed.

An optional callback function can be passed that will be called when the event listener is removed

## License

MIT, see [LICENSE.md](http://github.com/processprocess/mouse-speed/blob/master/LICENSE.md) for details.
