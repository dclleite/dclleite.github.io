
//abrir o menu mobile
$('.btmenu').click(function(){
	$("ul").slideToggle();

});
//desbugar a nav quando a tela aumentar
$(window).resize(function(){
	if ($(window).width() > 768){
		$("ul").removeAttr('style');
	}
});

//Scrol da página ao clicar em uma opção do menu
$('.linkInterno').click(function(e){
	e.preventDefault();

	if ($(window).width() < 768){
		$('#check').prop("checked",false);
		$("ul").slideToggle();
	}
	var id = $(this).attr('href'),
		menuHeight = $('nav div').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);

});
// scroll da página ao clicar em uma opção do botão
$('.botao').click(function(e){
	e.preventDefault();

	var id = $(this).attr('href'),
		menuHeight = $('nav div').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);

});
