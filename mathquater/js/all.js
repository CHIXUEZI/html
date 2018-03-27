$(function() {
            $(".nav_li").hover(function() {

                $(this).children("ul").slideDown(400);
            }, function() {
                $(this).children("ul").slideUp(100);
            });
        });