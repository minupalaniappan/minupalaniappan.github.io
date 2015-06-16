$( document ).ready(function() {
	var initTopPosition= $('.navigationbar').offset().top;   
	$(window).scroll(function(){
    	if($(window).scrollTop() > initTopPosition)
        	$('.navigationbar').css({'position':'fixed','top':'0px'});
    	else
        	$('.navigationbar').css({'position':'absolute','top':initTopPosition+'px'});
	});	
	$("#ME").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".me").offset().top
	    }, 2000);
	});
	$("#DOJO").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".dojo").offset().top
	    }, 2000);
	});

  $("#PROJECTLINKS").click(function() {
      $('html, body').animate({
          scrollTop: $(".project-links").offset().top
      }, 2000);
  });

  $("#HACKLINKS").click(function() {
      $('html, body').animate({
          scrollTop: $(".hackathonlinks").offset().top
      }, 2000);
  });

  $("#CONTACTLINKS").click(function() {
      $('html, body').animate({
          scrollTop: $(".footer").offset().top
      }, 2000);
  });

  $("#RESUMELINKS").click(function() {
      $('html, body').animate({
          scrollTop: $(".footer").offset().top
      }, 2000);
  });

  

  $( ".targ" ).hover(
	  function() {
	    $(this).find(".bitshift").stop().animate({
		    marginLeft: "0.1in",
  		}, 'fast' );
	  }, function() {
	    $(this).find(".bitshift").stop().animate({
		    marginLeft: "-0.3in",
  		}, 'fast');
	  }
  );


  $(".wheel-button").wheelmenu({
	  trigger: "hover", // Can be "click" or "hover". Default: "click"
	  animation: "fly", // Entrance animation. Can be "fade" or "fly". Default: "fade"
	  animationSpeed: "medium", // Entrance animation speed. Can be "instant", "fast", "medium", or "slow". Default: "medium"
	  angle: "all", // Angle which the menu will appear. Can be "all", "N", "NE", "E", "SE", "S", "SW", "W", "NW", or even array [0, 360]. Default: "all" or [0, 360]
  });

  $(this).scroll(function() {
  	$( ".wheel" ).css("visibility", "hidden")
  });


});







