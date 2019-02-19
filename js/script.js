$(function () {

	/*var nav = $('.menu');
	$('.btmenu').click(function(){
		nav.toggleClass("menu-open");
	})
	*/
	$('.btmenu').click(function(){
		$("ul").slideToggle();

	});


	$(window).resize(function(){
		if ($(window).width() > 768){
			$("ul").removeAttr('style');
		}
	});

});
