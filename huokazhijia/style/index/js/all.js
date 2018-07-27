$(function() {
    //loading加载
    document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            $(".loading").fadeOut();
        }

    }
    // 点击切换主界面图片
    var imgs = $('#header_main ul li a img');
    for (var i = 0; i < imgs.length; i++) {
        var j = i + 1;
        var path_before = "/img/icon/" + j + ".png";
        imgs.eq(i).attr('src', path_before);
        $('#header_main ul li a').children('p').css('color', '#4B4B4B');
    }
    var url = window.location.href;
    $('#header_main ul li').each(function() {
        var menu_url = returnUrl($(this).children('a').attr('href'));
        if (menu_url == returnUrl(url) || returnUrl(url).indexOf(menu_url) != -1) {
            var imgSrc = $(this).find('img');
            var oldsrc_num = imgSrc.attr('src').lastIndexOf('.');
            var oldsrc = imgSrc.attr('src').substring(0, oldsrc_num);
            var path = oldsrc + '_xz.png';
            imgSrc.attr('src', path);
            $(this).find('p').css('color', '#0084FF');
        }
    });
    //获取地址名称
    function returnUrl(href) {
        var url_num = href.lastIndexOf('/');
        return href.substring(url_num + 1, href.length - 5);
    };
    //签到功能
    $('.signIn').on('tap', 'a', function() {
        $(this).css('background', 'rgba(0,0,0,.5)');
        $(this).css('color', '#fff');
        var count1 = 1;
        var signcount = count1 + ' 天';
        $(this).html(signcount);
    });
    //论坛页点赞功能
    $('.media-list').on('tap', '.able_praise', function(e) {
        e.stopPropagation();
        praise($(this));
    });
    //帖子
    $('.able_praise').on('tap', function() {
        praise($(this));
    });
    //点赞方法
    function praise(praise_btn) {
        if (praise_btn.attr('disabled') == 'disabled') { return; }
        praise_btn.find('img').attr('src', 'img/icon/praise_down.png');
        var praise_count = parseInt(praise_btn.find('span').html()) + 1;
        praise_btn.find('span').html(praise_count);
        praise_btn.attr('disabled', 'disabled');
        praise_btn.find('p').css('color', '#FFAA25');
    };
    //点击弹出评论框
    $(document).on('tap', '.commentClick', function(e) {
        e.stopPropagation();
        //点击评论按钮加载表情图片
        if ($(".faceDiv").children().length == 0) {
            for (var i = 0; i < ImgIputHandler.facePath.length; i++) {
                $(".faceDiv").append("<img title=\"" + ImgIputHandler.facePath[i].faceName + "\" src=\"/img/face/" + ImgIputHandler.facePath[i].facePath + "\" />");
            }
            $(".faceDiv>img").click(function() {
                isShowImg = false;
                $(this).parent().animate({ marginTop: "3px" }, 300);
                ImgIputHandler.insertAtCursor($(".Input_text")[0], "[" + $(this).attr("title") + "]");
            });
        } else {
            //点击评论按钮出现评论框,隐藏之前加载好的表情图片
            $("#emotion").hide();
        }


        $('.commentBox_back').fadeIn(300);
        $('.commentBox').slideDown(400);

        //点击遮盖区域隐藏评论区
        $(document).on('tap', '.commentBox_back', function(e) {
            e.stopPropagation();
            $('.commentBox_back').fadeOut();
            $('.commentBox').slideUp(300);
        });
    });
    //点击切换文章编辑页的标签状态
    $(".editor_span_item").on('tap', function(e) {
        e.stopPropagation();
        $(this).addClass('editor_active').siblings().removeClass('editor_active');
    });
});