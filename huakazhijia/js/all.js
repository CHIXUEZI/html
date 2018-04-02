$(function () {
	$('#header_main ul li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var count = $(this).index();
		//var imgname = $(".class_img")[0].src();
		var path = "src="+"img/icon/"+count+"_xz"+".png";
		alert(count);
	});
});
