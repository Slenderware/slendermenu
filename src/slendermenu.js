/*
 * slendermenu
 * 
 *
 * Copyright (c) 2014 Jannik Richter
 * Licensed under the MIT license.
 */

(function ($) {

  // Collection method.
  $.fn.slenmenu = function () {
    return this.each(function (i) {
      // Do something slenmenu to each selected element.
      $(this).html('slenmenu' + i);
    });
  };

  // Static method.
  $.slenmenu = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.slenmenu.options, options);
    // Return something slenmenu.
    return 'slenmenu' + options.punctuation;
  };

  // Static method default options.
  $.slenmenu.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].slenmenu = function (elem) {
    // Is this element slenmenu?
    return $(elem).text().indexOf('slenmenu') !== -1;
  };

}(jQuery));
