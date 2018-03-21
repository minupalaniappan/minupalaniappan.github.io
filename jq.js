$(document ).ready(function() {
		console.log(isScrolledIntoView($("#2017")));

	if (isScrolledIntoView($("#google")) || isScrolledIntoView($("#yelp"))) {
		$("#2017_").addClass("scroll-select");
		$("#2016_").removeClass("scroll-select");
		$("#2010_").removeClass("scroll-select");
	} else if (isScrolledIntoView($("#2016"))) {
		$("#2017_").removeClass("scroll-select");
		$("#2016_").addClass("scroll-select");
		$("#2010_").removeClass("scroll-select");
	} else if (isScrolledIntoView($("#2010"))) {
		$("#2010_").addClass("scroll-select");
		$("#2017_").removeClass("scroll-select");
		$("#2016_").removeClass("scroll-select");
	}


    var span = $('.work-story'),
    div = $('.wrap'),
    win = $(window),
    divHeight = div.height();
	$(document).scroll(compute).scroll();
	$(window).resize(compute).resize();
  	
  	function isScrolledIntoView(el) {
	  	//special bonus for those using jQuery
	    if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }

	    var rect = el.getBoundingClientRect();
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	}

	function compute() {
		if (isScrolledIntoView($("#google")) || isScrolledIntoView($("#yelp"))) {
			$("#2017_").addClass("scroll-select");
			$("#2016_").removeClass("scroll-select");
			$("#2010_").removeClass("scroll-select");
		} else if (isScrolledIntoView($("#2016"))) {
			$("#2017_").removeClass("scroll-select");
			$("#2016_").addClass("scroll-select");
			$("#2010_").removeClass("scroll-select");
		} else if (isScrolledIntoView($("#2010"))) {
			$("#2010_").addClass("scroll-select");
			$("#2017_").removeClass("scroll-select");
			$("#2016_").removeClass("scroll-select");
		}
	  var spanHeight = span.outerHeight(),
	      spanOffset = span.offset().top + spanHeight,
	      divOffset = div.offset().top + divHeight;
	  	  span.removeClass('top');
	  	  span.removeClass('bottom');
	  if (spanOffset >= divOffset) {
	    span.addClass('bottom');
	    var windowScroll = win.scrollTop() + win.height() - 50;
	    if (spanOffset > windowScroll) {
	      if (span.hasClass( "bottom_parr" )) {
	      	span.addClass('bottom');
	      	span.removeClass("bottom_parr");
	      } else {
	      	span.addClass('bottom_parr');
	      	span.removeClass('bottom');
	      }
	    }
	  } else {
	  	if (span.offset().top < div.offset().top) {
	  		span.removeClass('bottom');
	  		span.removeClass('bottom_parr');
	  		span.addClass('top');
	  	}
	  }
	}
});