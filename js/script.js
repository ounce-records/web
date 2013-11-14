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
			var top_pos;

			// TODO: vertically center image

			if(container_aspect_ratio>image_aspect_ratio){
				$image.addClass('match-height');
				image_width = $image.outerWidth(true);
				left_pos = (container_width-image_width)/2;
				$image.css('left', left_pos+'px');
				top_pos = 0;
				$image.css('top', top_pos+'px');
			}else{
				$image.removeClass('match-height');
				image_height = $image.outerHeight(true);
				left_pos = 0;
				$image.css('left', left_pos+'px');
				top_pos = (container_height-image_height)/2;
				$image.css('top', top_pos+'px');
			}
		}
		bind_events();
	}
	function bind_events(){
		$('.header-img').load(function() {
			ounce_js.resize_homepage_img.init();
		});
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

ounce_js.map_resize = (function(){
	function init(){
		resize_map();
		bind_events();
	}
	function resize_map(){
		console.log('resize_map');
		var $map = $('#map-canvas');
		var window_height = $(window).height();
		$map.height(window_height * 0.5);
	}
	function bind_events(){
		$(window).resize(function() {
			resize_map();
		});
	}

	return{
		init: init
	}
})();


$(document).ready(function(){
	ounce_js.resize_homepage_img.init();
	ounce_js.map_resize.init();
});

$(window).resize(function() {
	ounce_js.resize_homepage_img.init();
});

$(window).scroll(function(){
  ounce_js.parallax;
});
