;$(function(){
	$('.nav1 > li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.nav2').slideDown('slow');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.nav2').slideUp(200);
	});
	var url = window.location.href;
	$('.newslist #newslist_main .newslist_title ul li').each(function() {
		if(returnUrl($(this).children('a').attr('href'))==returnUrl(url)){
			$(this).addClass('active');
		}
	});
	function returnUrl(href){
		var unum = href.lastIndexOf('/');
		return href.substring(unum+1);
	}
});