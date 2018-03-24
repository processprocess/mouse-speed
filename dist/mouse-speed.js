"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function MouseSpeed() {
    _classCallCheck(this, MouseSpeed);

    this.cb = function () {};
    this.speedX = 0;
    this.speedY = 0;
    this.oldX = 0;
    this.oldY = 0;
    this.firstCalc = true;
    this.timerId;
    this.calcSpeed = this.calcSpeed.bind(this);
  }

  _createClass(MouseSpeed, [{
    key: "calcSpeed",
    value: function calcSpeed(e) {
      if (!this.firstCalc) {
        this.speedX = e.clientX - this.oldX;
        this.speedY = e.clientY - this.oldY;
        this.oldX = e.clientX;
        this.oldY = e.clientY;
        this.cb();
        this.setToZero();
      } else {
        this.oldX = e.clientX;
        this.oldY = e.clientY;
        this.firstCalc = false;
      }
    }
  }, {
    key: "setToZero",
    value: function setToZero() {
      var _this = this;

      clearTimeout(this.timerId);
      this.timerId = setTimeout(function () {
        _this.speedX = 0;
        _this.speedY = 0;
        _this.cb();
      }, 50);
    }
  }, {
    key: "init",
    value: function init() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        console.log("pass a callback function on init to access speedX and speedY.");
      };

      this.cb = cb;
      window.addEventListener("mousemove", this.calcSpeed);
    }
  }, {
    key: "destroy",
    value: function destroy(cb) {
      window.removeEventListener("mousemove", this.calcSpeed);
      cb();
    }
  }]);

  return MouseSpeed;
}();