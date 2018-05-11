/**
 * 
 * @authors 肖茹冰
 * @date    2018-05-03 14:40:46
 * @version $Id$
 */
 $(function() {
    $(".nav_li").hover(function() {
    	$(this).children('ul').stop(false,true);
        $(this).children("ul").slideDown(400);
    }, function() {
        $(this).children("ul").slideUp(100);
    });

    var url = window.location.href;
    $('content_left ul li').each(function() {
        if(returnUrl($(this).children('a').attr('href'))==returnUrl(url)){
            $(this).children('a').addClass('content_act');
        }
    });
    // 获取页面地址
    function returnUrl(href){
        var unum = href.lastIndexOf('/');
        return href.substring(unum+1);
    };
    //浮动工具栏
    $('.floatool ul li').hover(function () {
        $(this).children('.tool-hide').addClass('active');
    },function () {
        $(this).children('.tool-hide').removeClass('active');
    });
    //回到顶部
    var up = $('.up');
    up.hide();
    $(window).scroll(function() {
        if($(this).scrollTop()>100){
            up.fadeIn();
        }else {
            up.fadeOut();
        }
    });
    up.click(function() {
        $('html,body').animate({scrollTop:0},500);
        return false;
    });
});

