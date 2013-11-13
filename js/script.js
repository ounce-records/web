var ounce_js = {};

ounce_js.resize_homepage_img = (function(){
	function init(){
		if($('.full-height-header-wrapper').length){
			
			var $container = $('.full-height-header-wrapper');
			var container_height = $container.outerHeight(true);
			var container_width = $container.outerWidth(true);
			var container_aspect_ratio = container_height/container_width;

			var $image = $('.header-img');
			var image_height = $image.outerHeight(true);
			var image_width = $image.outerWidth(true);
			var image_aspect_ratio = image_height/image_width;

			var left_pos;

			if(container_aspect_ratio>image_aspect_ratio){
				$image.addClass('match-height');
				left_pos = (container_width-image_width)/2;
				$image.css('left', left_pos+'px');
			}else{
				$image.removeClass('match-height');
				left_pos = 0;
				$image.css('left', left_pos+'px');
			}
		}
	}
	return {
		init: init
	};
})();

ounce_js.parallax = (function(){
	function position_image(){
		
	}
	return {
		position_image: position_image
	};
})();

ounce_js.gallery = (function(){
	
})();


$(document).ready(function(){
	ounce_js.resize_homepage_img.init();
	$('.header-img').load(function() {
		ounce_js.resize_homepage_img.init();
	});
});

$(window).resize(function() {
	ounce_js.resize_homepage_img.init();
});

$(window).scroll(function(){
  ounce_js.parallax;
});
