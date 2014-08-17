/*
 * slendermenu
 * 
 *
 * Copyright (c) 2014 Jannik Richter
 * Licensed under the MIT license.
 */

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
