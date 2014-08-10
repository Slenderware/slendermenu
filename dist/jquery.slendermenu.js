/*! slendermenu - v0.0.1 - 2014-08-10
* https://github.com/nikrich/slendermenu
* Copyright (c) 2014 Jannik Richter; Licensed MIT */
(function ($) {

  // Collection method.
  $.fn.slenselect = function () {      
    this.click(function() {

      if($('.slenmenu').hasClass('closed'))
      {
        $(".slenmenu")
        .removeClass("closed");
      }
      else
      {
        $(".slenmenu")        
        .addClass( "closed" );
      }
    });
     return this;
     
  };

}(jQuery));
