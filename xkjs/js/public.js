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
	// action点击切换
	function returnUrl(href){
		var unum = href.lastIndexOf('/');
		return href.substring(unum+1);
	};
	// newsimg轮播
	var banimgs = $('.section .secmain #newsimg ul li');
	var count =1;
	var time=setInterval(newsbanner,2800);
	function newsbanner(){
		banimgs.eq(count).fadeIn(600).siblings().fadeOut(600);
		if(count>=banimgs.length-1){
			count=0;
		}else{
			count++;
		}
		//alert(count);
	}

	// 随机切换look
	function changebackimg(){
		var random_imgs = Math.floor(Math.random()*3+1);
		var bimgUrl = 'url(./images/rod/'+random_imgs+'.jpg)';
		//alert(bimgUrl);
		$('#look').css("background-image",bimgUrl);
	}


});