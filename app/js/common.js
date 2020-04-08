$( document ).ready(function() {

	new WOW().init();

	$('.photo__slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			},	
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});

});