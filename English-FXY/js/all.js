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
    //banner
    var bannerimgs1 = $(".banner .banner_main .banner_img a");
    var count1 = 0;
    var time1 = setInterval(banner1, 2200);

    function banner1() {
        bannerimgs1.eq(count1).fadeIn().siblings().fadeOut();
        if (count1 >= bannerimgs1.length - 1) {
            count1 = 0;
        } else {
            count1++;
        }
    };
});

