;$(function(){
	changebackimg();
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
	// newsimg轮播
	var banimgs = $('.section .secmain #newsimg ul li a');
	var count =0;
	var time=setInterval(newsbanner,2400);
	function newsbanner(){
		banimgs.eq(count).fadeIn().siblings().fadeOut();
		if(count>=banimgs.length-1){
			count=0;
		}else{
			count++;
		}
		alert(banimgs.eq(count).siblings());
	}
	// action点击切换
	function returnUrl(href){
		var unum = href.lastIndexOf('/');
		return href.substring(unum+1);
	};

	// 随机切换look
	function changebackimg(){
		var random_imgs = Math.floor(Math.random()*3+1);
		var bimgUrl = 'url(./images/rod/'+random_imgs+'.jpg)';
		//alert(bimgUrl);
		$('#look').css("background-image",bimgUrl);
	}

});