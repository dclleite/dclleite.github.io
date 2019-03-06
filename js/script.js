
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

// função esconder e aparecer btn voltar ao topo

var btnVoltar = $(".btnTopo");

$(window).scroll(function(){
	var menuHeight = $('nav div').innerHeight(),
	headerHeight = $('header').innerHeight();
	if($(this).scrollTop()>headerHeight-menuHeight){
		btnVoltar.fadeIn(0);
	}else{
		btnVoltar.fadeOut(0);
	}
})

// click btn voltar ao topo

btnVoltar.click(function(e){
	e.preventDefault();
	
	$('html, body').animate({
		scrollTop: 0}, 500);

});

btnVoltar.hover(function(){
	$('div.btnTopo a').addClass("animated bounceInUp").one("animationend",function(){
		$(this).removeClass("animated bounceInUp");
	});
});
