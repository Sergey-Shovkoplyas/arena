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

	// Popap toggle  --------------------------------------

	let $popap = $('.popap'); 
	$('.btn').not('.btn.popap__btn').on('click', function(e) {
		e.preventDefault();
		$popap.toggleClass('active');
	});
	$('.popap__close').on('click', function() {
		$popap.toggleClass('active');
	});
	$('.popap').on('click', function(e) {
		if(e.target === this) {
			$popap.removeClass('active');
		}
	});

	// Sent form to email  --------------------------------------

	$("#popapForm").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
			$popap.removeClass('active');
		});
		return false;
	});

});