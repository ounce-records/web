var ounce_js={};ounce_js.resize_homepage_img=function(){function e(){if($(".full-height-header-wrapper").length){var e=$(".full-height-header-wrapper"),t=e.outerHeight(!0),n=e.outerWidth(!0),r=t/n,i=$(".header-img"),s=i.outerHeight(!0),o=i.outerWidth(!0),u=s/o,a;if(r>u){i.addClass("match-height");a=(n-o)/2;i.css("left",a+"px")}else{i.removeClass("match-height");a=0;i.css("left",a+"px")}}}return{init:e}}();ounce_js.parallax=function(){function e(){}return{position_image:e}}();ounce_js.gallery=function(){}();$(document).ready(function(){ounce_js.resize_homepage_img.init();$(".header-img").load(function(){ounce_js.resize_homepage_img.init()})});$(window).resize(function(){ounce_js.resize_homepage_img.init()});$(window).scroll(function(){ounce_js.parallax});