$(function () {
	$("[id^=button]").click(function () {
		let index = $(this).attr("id").replace("button", "");
		$(".img" + index).fadeIn().siblings().fadeOut();
	});

});
