$(function() {
    $(".nav_li").hover(function() {

        $(this).children("ul").slideDown(400);
    }, function() {
        $(this).children("ul").slideUp(100);
    });
    var url = window.location.href;
    $('.newslist #newslist_main .newslist_title ul li').each(function() {
        if (returnUrl($(this).children('a').attr('href')) == returnUrl(url)) {
            $(this).addClass('active');
        }
    });

    function returnUrl(href) {
        var unum = href.lastIndexOf('/');
        return href.substring(unum + 1);
    }
});