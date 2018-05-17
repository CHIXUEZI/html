// JavaScript Document
$(function(){
	var moveOn = true;
	$(document).ready(function(){
	$('.close').live('click', function(){
	$('#float-dialog').hide();
	});
	move($('#float-dialog'), 1, 1);
	$('#float-dialog').mouseenter(function(){
	moveOn = false;
	}).mouseout(function(){
	moveOn = true;
	});
	});
	function move(dom, speedX, speedY) {
	if ( ! moveOn ) return setTimeout(function(){move(dom, speedX, speedY);}, 40);;
	var width = $(dom).width();
	var height = $(dom).height();
	var offset = $(dom).offset();
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	var base = {top:$(document).scrollTop(), left:$(document).scrollLeft()};
	if (offset.left + speedX + width >= base.left + screenWidth) {
	speedX = -Math.abs(speedX);
	offset.left = screenWidth - width;
	} else if (offset.left + speedX <= base.left + 0) {
	speedX = Math.abs(speedX);
	offset.left = base.left + 0;
	} else {
	offset.left += speedX;
	}
	if (offset.top + speedY + height >= base.top + screenHeight) {
	speedY = -Math.abs(speedY);
	offset.top = base.top + screenHeight - height;
	} else if (offset.top + speedY <= base.top) {
	speedY = Math.abs(speedY);
	offset.top = base.top + 0;
	} else {
	offset.top += speedY;
	}
	$(dom).offset({top:offset.top, left:offset.left});
	setTimeout(function(){move(dom, speedX, speedY);}, 40);
	} 
})