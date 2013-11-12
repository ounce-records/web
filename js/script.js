var ounce_js = {};

ounce_js.resize_homepage_img = (function(){
	function init(){
		$header_container = $('body.home .full-height-header-wrapper');
		console.log($header_container);
	}
	return {
		init: init
	}
})();


$(document).ready(function(){
	ounce_js.resize_homepage_img.init();
})