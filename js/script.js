

//  ---------------- HEADER COLOUR TRANSITION FUNCTION ---------------- //

$(document).ready(function(e){
if ($("nav").hasClass("opaqueHeader")){
	$(".header").css("background-color","rgba(37,41,46,1)");
}
else {
	$(window).scroll(function(){
		if($(this).scrollTop() > "100"){
			$(".header").addClass("fixedHeader").css("background-color","rgba(37,41,46,0.4)");
		}if($(".fixedHeader").scrollTop() > "250"){
			$(".fixedHeader").css("background-color","rgba(37,41,46,0.6)");
		}if($(this).scrollTop() > "300"){
			$(".fixedHeader").css("background-color","rgba(37,41,46,0.8)");
		}if($(this).scrollTop() > "350"){
			$(".fixedHeader").css("background-color","rgba(37,41,46,1)");
		}if($(this).scrollTop() <= "50"){
			$(".fixedHeader").css("background","none").removeClass("fixedHeader");
		}

});

}

//  ---------------- HEADER COLOUR TRANSITION FUNCTION ENDS ---------------- //

$('h1 .contactUsSlider').smoothScroll();

//  ---------------- TOGGLE BUTTON FUNCTION ---------------- //

$(".buttonDesign").on("click",function(){
	if($(this).hasClass("menuActive")){
		$("body").removeClass("headerMenuActive");
		$(this).removeClass("menuActive");
		$($(this).data("target")).fadeOut();
	}else{
		$("body").addClass("headerMenuActive");
		$(this).addClass("menuActive");
		$($(this).data("target")).fadeIn();
	}

});


$(".contactUsSlider").click(function(){
		$("body").removeClass("headerMenuActive");
		$(".navbar-header button").toggleClass("menuActive");
		$(".navbar-collapse").css("display","none");
});


//  ---------------- TOGGLE BUTTON FUNCTION ENDS---------------- //

//  ---------------- SWIPE FUNCTION ---------------- //


  $("#myCarousel").swiperight(function() {
	$(this).carousel('prev');
	});
	$("#myCarousel").swipeleft(function() {
	$(this).carousel('next');
	});

//  ---------------- SWIPE FUNCTION ENDS ---------------- //

//  ---------------- IMAGE GALLERY FUNCTION ---------------- //

	$(".eventPhotograph").colorbox({rel:'eventPhotograph'});

	$("#click").click(function(){
	$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
	return false;
	});

	(function ($window) {
	//Configure colorbox call back to resize with custom dimensions
	$.colorbox.settings.onLoad = function() {
	colorboxResize();
	}
	//Customize colorbox dimensions
	var colorboxResize = function(resize) {
		var width = "90%";
		var height = "90%";
		if($(window).width() > 960) { width = "860" }
		if($(window).height() > 700) { height = "630" }
		$.colorbox.settings.height = height;
		$.colorbox.settings.width = width;
		//if window is resized while lightbox open
			if(resize) {
			$.colorbox.resize({
			'height': height,
			'width': width
			});
		}
	}
	//In case of window being resized
	$(window).resize(function() {
	colorboxResize(true);
	});

	})(jQuery, this, this.document);

//  ---------------- IMAGE GALLERY FUNCTION ENDS ---------------- //

//  ---------------- COSTUME ZOOM FUNCTION ---------------- //


$(".wear").hide();
    $('.wear:first').show();
    $(".Costume li a").click(function () {
        var tablink = $(this).attr('href');
        $(".wear").fadeOut(0);
        $(tablink).stop().fadeIn(400);
        $(this).parents(".Costume").find('li').removeClass("active");
        $(this).parents(".Costume li").addClass("active");
        return false;
});

if($(window).width() < 768){
		    $('.Costume').affix({offset: {top: 85} });

	}else{
		    $('.Costume').affix({offset: {top: 110} });

	}

	//  ---------------- COSTUME ZOOM FUNCTION ENDS ---------------- //

//  ---------------- BACK TO TOP FUNCTION ---------------- //


var btt = $('.backtotop');

	btt.on('click',function(e) {
		$('html,body').animate({scrollTop:0}, '500');

		e.preventDefault();
	});

	$(window).on('scroll',function(){
		var self = $(this),
			height = self.height(),
			top = self.scrollTop();

			if(top > height) {
				if(!btt.is(':visible')) {
					btt.show();
				}
			} else {
				btt.hide();
			}
	});

	$('.zoom').zoom();
// 	$('.zoom').zoom({ on:'grab' });
	// $('.zoom').zoom({ on:'click' });
// 	// $('.zoom').zoom({ on:'toggle' });




});

//  ---------------- BACKGROUND VIDEO FUNCTION ---------------- //

var  weboCommanMethod = function(){
	this.setWindowHeight= function (ele){
		var wHt = $(window).outerHeight(true);
		$(ele).css("height",wHt);
		if(ele == ".videoWrap"){
			$(ele).find(".dispTable").css("height",wHt);
		}
	}
}

var setVideoSize = function (){
	var $window = $(window),
		windowWidth = $window.width(),
		windowHeight = $window.height(),
		$videoWrap = $(".homepage-video");
	if($videoWrap.height() <= windowHeight && $videoWrap.width() >= windowWidth){
		$videoWrap.css("height","100%");
		$videoWrap.css("width","auto");
	}else
	{
		$videoWrap.css("height","auto");
		$videoWrap.css("width","100%");
	}
	var overflowHt = $videoWrap.height()-windowHeight
	var overflowWt = $videoWrap.width()-windowWidth
	if( overflowHt>=0 && overflowWt >=0){
		$videoWrap.css("margin-left",-overflowWt/2);
		$videoWrap.css("margin-top",-overflowHt/2);
	}
}


//  ---------------- BACKGROUND VIDEO FUNCTION ENDS ---------------- //



