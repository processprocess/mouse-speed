# mouse-speed

Calculates mouse speed during the `mousemove` event, creating speedX and speedY values on the instance of mouse-speed.

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

The speed values are accessed through the speedX and speedY properties of the instance.

The function passed to mouse-speed will fire on every mouse-move event.

```js
var onDestroyFunc = function() {
    console.log("destroyed");
};

speed.destroy(onDestroyFunc);
```

To remove the event listener, call .destroy on the instance of mouse-speed.

An optional callback can be passed that will be called when the event listener is removed

## License

MIT, see [LICENSE.md](http://github.com/processprocess/mouse-speed/blob/master/LICENSE.md) for details.
