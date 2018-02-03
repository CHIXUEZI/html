$(function() {
    $(".nav_li").hover(function() {

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
    var tabhead = $(".tab .tab_title li");
    var tabcontents = $(".tab .tab_body > div");
    var count2 = 0;
    var tabimg = null;
    tabhead.on('click', function(e) {
        e.preventDefault();
        var i = $(this).index();
        tabhead.removeClass('active').eq(i).addClass('active');
        tabcontents.removeClass('act').eq(i).addClass('act');
        tabimg = $(".tab .tab_body .tab_main" + i + " .tab_img a");
    });
	var time2 = setInterval(tabbanner, 3000);
    function tabbanner() {
        //alert(count2);
        tabimg.eq(count2).fadeIn().siblings().fadeOut();
        if (count2 >= tabimg.length - 1) {
            count2 = 0;
        } else {
            count2++;
        }
    };
    $(".tab .tab_title li:first-of-type").click();

});