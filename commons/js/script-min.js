$(document).ready(function(){$window=$(window),$('section[data-type="background"]').each(function(){var o=$(this);$(window).scroll(function(){var n=-$window.scrollTop()/o.data("speed"),e="50% "+n+"px";o.css({backgroundPosition:e})})})}),document.createElement("article"),document.createElement("section");var main=function(){$(".icon-menu").click(function(){$(".menu").animate({left:"0px"},200),$(".icon-menu").css({display:"none!important"}),$("body").animate({left:"100%"},200)}),$(".icon-close,.top-slider-close, .services-close, .shop-close, .portfolio-close, .cooperation-close, .reviews-close, .contacts-close").click(function(){$(".menu").animate({left:"-100%"},200),$("body").animate({left:"0px"},200)})};$(document).ready(main),$(document).ready(function(){$("#menu, #menu-bottom, #menuscroll, .toggleclass").on("click","a",function(o){o.preventDefault();var n=$(this).attr("href"),e=$(n).offset().top;$("body,html").animate({scrollTop:e},1500)})}),$(function(){$("#third").carouseller({easing:"linear"})}),$(function(){$("#third2").carouseller({easing:"linear"})}),$(function(){$("#third3").carouseller({easing:"linear"})}),$(function(){$("#third4").carouseller({easing:"linear"})}),$(function(){$("#ri-grid").gridrotator({rows:3,columns:4,w1024:{rows:3,columns:4},w768:{rows:3,columns:4},w480:{rows:3,columns:4},w320:{rows:3,columns:4},w240:{rows:3,columns:4}})}),$("body").flipLightBox(),jQuery(function(o){o(".basic").click(function(n){return o("#basic-modal-content").modal(),!1})}),jQuery(function(o){o(".toggleclass").on("click",function(){event.preventDefault(),o(".order-products-block_all-products").fadeIn().css("display","block"),o(".order-products-block-carousel").fadeOut().css("display","none")})});