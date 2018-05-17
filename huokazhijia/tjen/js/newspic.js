// JavaScript Document
$(document).ready(function() {
	//瀛愬鑸樉绀�
	$(".navCon_xy").hide();
	$(".nav li").hover(function(){
		$(this).children("ul").slideDown("fast");
	},function(){
		$(this).children("ul").slideUp();/**/
		/*$(this).children("ul").slideDown();
	},function(){
		$(this).children("ul").hide();*/
	});


	//鍥剧墖杞挱
	$(function(){
	var len=$(".num li").length=4;
	var index = 1;
	var adTimer;
	// $(".pictureShow:eq(0)").fadeOut(3000);
	
	adTimer=setInterval(function(){
					showImg(index);
					index++;
					if(index==len){index=0;}
					},4000);
	
	$(".num li").mouseenter(function(){
		clearInterval(adTimer);
		index = $(".num li").index(this);
		showImg(index);
		});
		
	$(".num li").mouseleave(function(){
				adTimer=setInterval(function(){
					index++;
					if(index==len){index=0;}
					showImg(index);
					},4000);
	});
		
	function showImg(index){
		$(".pictureShow img").hide().eq(index).show();
		$(".num li").removeClass("on").eq(index).addClass("on");
		}
				//showImg();
	});


	//鍥剧墖鏃犵紳婊氬姩
	//鍥剧墖婊氬姩 璋冪敤鏂规硶 imgscroll({speed: 30,amount: 1,dir: "up"});
	$.fn.imgscroll = function(o){
	  var defaults = {
	    speed: 40,
	    amount: 0,
	    width: 1,
	    dir: "left"
	  };
	  o = $.extend(defaults, o);
	  
	  return this.each(function(){
	    var _li = $("li", this);
	    _li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
	    _li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
	    _li.css({position: "relative", overflow: "hidden"}); //li
	    if(o.dir == "left") _li.css({float: "left"});
	    
	    //鍒濆澶у皬
	    var _li_size = 0;
	    for(var i=0; i<_li.size(); i++)
	      _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
	    
	    //寰幆鎵€闇€瑕佺殑鍏冪礌
	    if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
	    _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
	    _li = $("li", this);

	    //婊氬姩
	    var _li_scroll = 0;
	    function goto(){
	      _li_scroll += o.width;
	      if(_li_scroll > _li_size)
	      {
	        _li_scroll = 0;
	        _li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
	        _li_scroll += o.width;
	      }
	        _li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
	    }
	    
	    //寮€濮�
	    var move = setInterval(function(){ goto(); }, o.speed);
	    _li.parent().hover(function(){
	      clearInterval(move);
	    },function(){
	      clearInterval(move);
	      move = setInterval(function(){ goto(); }, o.speed);
	    });
	  });
	};

	$(".picture").imgscroll({
	    speed: 40,    //鍥剧墖婊氬姩閫熷害
	    amount: 0,    //鍥剧墖婊氬姩杩囨浮鏃堕棿
	    width: 1,     //鍥剧墖婊氬姩姝ユ暟
	    dir: "left"   // "left" 鎴� "up" 鍚戝乏鎴栧悜涓婃粴鍔�
	  });

});