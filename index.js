/**
 * Flexible scrollend event for the browser.
 *
 * @file Scrollend
 * @author T-Pain
 */
var EventEmitter = require('events').EventEmitter;
var inherits     = require('util').inherits;
var $            = require('jquery');

var Scrollend = function(timeout) {
  var milli = timeout || 250;

  // Ensure that this is being called as a constructor.
  if (!(this instanceof Scrollend)) return new Scrollend(timeout);

  // Do stuff during scroll event.
  $(window).scroll(function() {

    // Clear previous timer.
    clearTimeout($.data(window, 'scrollTimer'));

    // Attach timer.
    $.data(window, 'scrollTimer', setTimeout(function() {
      this.emit('scrollend');
    }.bind(this), milli));

  }.bind(this));
};

inherits(Scrollend, EventEmitter);

/**
 * Alias for .on('scrollend')
 */
Scrollend.prototype.add = function(fn) {
  this.on('scrollend', fn);
};


/**
 * @exports
 */
module.exports = function(timeout) {
  var scrollend = new Scrollend(timeout);

  return scrollend.add.bind(scrollend);
};
