$(function () {
	$("[id^=button]").click(function () {
		let index = $(this).attr("id").replace("button", "");
		$(".img" + index).fadeIn().siblings().fadeOut();
	});

});
$(function () {
	$("[id^=btn]").click(function () {
		let index = $(this).attr("id").replace("btn", "");
		$(".image" + index).fadeIn().siblings().fadeOut();
	});

});
