var ounce_js = {};

ounce_js.resize_homepage_img = (function(){
	function init(){
		if($('.full-height-header-wrapper').length){
			resize();
			bind_events();
		}
	}
	function resize(){
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
	function bind_events(){
		$('.header-img').load(function() {
			ounce_js.resize_homepage_img.init();
		});
		$(window).resize(function() {
			resize();
		});
	}
	return {
		init: init
	};
})();

ounce_js.parallax = (function(){
	var breakpoint;
	function init(set_breakpoint){
		breakpoint = set_breakpoint;
		position_image();
		bind_events();
	}
	function position_image(){
		var window_width = $(window).width();
		var $header_img = $('.header .header-img');
		if(window_width > breakpoint){
			var scroll_pos = $(window).scrollTop();
			$header_img.css('margin-top', (scroll_pos/10)+'px');
		}else{
			$header_img.css('margin-top', '0px');
		}	
	}
	function bind_events(){
		$(window).scroll(function(){
			position_image();
		}).trigger("scroll");
		$(window).resize(function() {
			position_image();
		});
	}
	return {
		init: init,
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
		var $map = $('#map-canvas');
		var window_height = $(window).height();
		$map.height(window_height * 0.5);
	}
	function bind_events(){
		$(window).resize(function() {
			resize_map();
		});
	}

	return {
		init: init
	}
})();


$(document).ready(function(){
	ounce_js.resize_homepage_img.init();
	ounce_js.map_resize.init();
	ounce_js.parallax.init(1024);
});
