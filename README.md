# mouse-speed

Calculates mouse speed during the `mousemove` event.

[![NPM](https://nodei.co/npm/mouse-speed.png)](https://nodei.co/npm/mouse-speed/)

## Usage

```js
var MouseSpeed = require("mouse-speed");
var speed = new MouseSpeed();
speed.init(onCalcSpeed);

var onCalcSpeed = function() {
    var speedX = speed.speedX;
    var speedY = speed.speedY;
    // do anything you want with speed values
    console.log(speedX, speedY);
};
```

Create a new instance of mouse-speed in your project.

The speed values are accessed through the `speedX` and `speedY` properties on the instance.

The function passed to the instance will fire on every mousemove event.

```js
speed.destroy(onDestroyFunc);

var onDestroyFunc = function() {
    console.log("destroyed");
};
```

To remove the event listener, call `destroy` on the instance of mouse-speed.

An optional function can be passed that will be called when the event listener is removed

## License

MIT, see [LICENSE.md](http://github.com/processprocess/mouse-speed/blob/master/LICENSE.md) for details.
