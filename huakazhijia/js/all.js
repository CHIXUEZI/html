$(function() {
    // 点击切换主界面图片
    $('#header_main ul li').on("tap", function() {
        var imgs = $('#header_main ul li a img');
        for (var i = 0; i < imgs.length; i++) {
            var j = i + 1;
            var path_before = "img/icon/" + j + ".png";
            imgs.eq(i).attr('src', path_before);
        $('#header_main ul li a').children('p').css('color', '#4B4B4B');
            //alert(i);
        }
        var count = $(this).index() + 1;
        var imgSrc = $(this).find('img');
        var path = "img/icon/" + count + "_xz" + ".png";
        imgSrc.attr('src', path);
        $(this).find('p').css('color', '#0084FF');
    });
    //签到功能
    $('#signIn a').on('tap', function() {
		//$(this).children().attr('src','img/icon/button_ok.png');
		$(this).css('background','rgba(0,0,0,.5)');
		var count1=1;
		var signcount = '已签到 '+count1+' 天';
		$(this).html(signcount);
	});
});