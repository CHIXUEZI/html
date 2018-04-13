$(function() {
    // 点击切换主界面图片
    var imgs = $('#header_main ul li a img');
    for (var i = 0; i < imgs.length; i++) {
        var j = i + 1;
        var path_before = "/img/icon/" + j + ".png";
        imgs.eq(i).attr('src', path_before);
        $('#header_main ul li a').children('p').css('color', '#4B4B4B');
    }
    var url = window.location.href;
    //console.log($('#header_main ul li').length);
    $('#header_main ul li').each(function () {
        if(returnUrl($(this).children('a').attr('href'))==returnUrl(url)){
            var imgSrc = $(this).find('img');
            var oldsrc_num = imgSrc.attr('src').lastIndexOf('.');
            //console.log(oldsrc_num);
            var oldsrc = imgSrc.attr('src').substring(0, oldsrc_num);
            var path =oldsrc+'_xz.png';
            imgSrc.attr('src',path);
            $(this).find('p').css('color', '#0084FF');
        }
    });
    //获取地址名称
    function returnUrl (href) {
        var url_num = href.lastIndexOf('/');
        return href.substring(url_num+1);
    };
    //签到功能
    $('#signIn').on('tap', 'a', function() {
        //$(this).children().attr('src','img/icon/button_ok.png');
        $(this).css('background', 'rgba(0,0,0,.5)');
        var count1 = 1;
        var signcount = '已签到 ' + count1 + ' 天';
        $(this).html(signcount);
    });
    //论坛页点赞功能
    $('.media-list').on('tap','.able_praise', function(e) {
        e.stopPropagation();
        if ($(this).attr('disabled') == 'disabled') { return; }
        $(this).find('img').attr('src', 'img/icon/praise_down.png');
        var praise_count = parseInt($(this).find('span').html()) + 1;
        $(this).find('span').html(praise_count);
        $(this).attr('disabled', 'disabled');
    });
    //点击弹出评论框
    $(document).on('tap','.commentClick',function (e) {
        e.stopPropagation();
        $('.commentBox').slideDown(400, function(){$('.commentBox_back').fadeIn();});
        
    });
    //点击遮盖区域隐藏评论区
    $(document).on('tap','.commentBox_back',function (e) {
        //console.log(1);
        e.stopPropagation();
        $('.commentBox_back').fadeOut();
        $('.commentBox').slideUp(300);
    });
});