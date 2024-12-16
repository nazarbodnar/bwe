$(document).ready(function () {
	$('.bg-img').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});
	$('.about-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
	});
	$('.custumers-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}
		]
	});
	$('<a href="#" class="open-menu"><span></span>Open Menu</a>').appendTo('#header');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});//btn-open-manu
		$('.btn-scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
    /*btn-scroll*/
	initHeight();
});

$(window).on('scroll', function(){
	if ($(window).scrollTop() >= $( window ).height()) {
		$('#header').addClass('fixed-header');
	}
	else {
		$('#header').removeClass('fixed-header');
	}
});
$(window).on('resize load', function(){
	initHeight();
});
function initHeight(){
	if ($(window).width() > 768 ) {
		$('.same-height').matchHeight({
			
		});
	}
}