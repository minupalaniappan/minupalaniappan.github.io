$( document ).ready(function() {
	var initTopPosition= $('.toolbar').offset().top;   
	$(window).scroll(function(){
    	if($(window).scrollTop() > initTopPosition)
        	$('.toolbar').css({'position':'fixed','top':'0px'});
    	else
        	$('.toolbar').css({'position':'absolute','top':initTopPosition+'px'});
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
});
