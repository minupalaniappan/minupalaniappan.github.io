$(document ).ready(function() {
    var span = $('.work-story'),
    div = $('.wrap'),
    win = $(window),
    divHeight = div.height();
	$(document).scroll(compute).scroll();
	$(window).resize(compute).resize();
  	
  	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function compute() {
		if (isScrolledIntoView($("#2017"))) {
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
	      span.removeClass('bottom');
	    }
	  } else {
	  	if (span.offset().top < div.offset().top) {
	  		span.removeClass('bottom');
	  		span.addClass('top');
	  	}
	  }
	}
});