// Generated by CoffeeScript 1.6.2
var Handler, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Handler = (function(_super) {
  __extends(Handler, _super);

  function Handler() {
    this._onKeyUp = __bind(this._onKeyUp, this);    _ref = Handler.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  /*
  */


  Handler.prototype.init = function() {
    Handler.__super__.init.call(this);
    return $(this.element).bind("keyup", this._onKeyUp);
  };

  /*
  */


  Handler.prototype._onKeyUp = function(event) {
    if (event.keyCode !== 13) {
      return;
    }
    return this.script.update();
  };

  return Handler;

})(require("./base"));

module.exports = Handler;