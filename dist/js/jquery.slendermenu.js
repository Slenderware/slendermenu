/*! slendermenu - v0.0.1 - 2014-10-08
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

        $(".contentarea")
        .removeClass("contentclosed");
      }
      else
      {
        $(".slenmenu")        
        .addClass( "closed" );

         $(".contentarea")
        .addClass("contentclosed");
      }
    });
     return this;
     
  };

}(jQuery));
