$(document).ready(function(){
	$('.slider-container').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
        // adaptiveHeight:true,
        // appendDots:$('.slider-dots'),
		autoplaySpeed:6000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
