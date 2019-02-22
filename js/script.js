
//abrir o menu mobile
$('.btmenu').click(function(){
	$("ul").slideToggle();

});

$(window).resize(function(){
	if ($(window).width() > 768){
		$("ul").removeAttr('style');
	}
});


$('.linkInterno, .botao').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


