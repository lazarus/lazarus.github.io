$(document).ready(function() {
	$("nav ul").click(function(e) {
		console.log(e.offsetX, window.innerWidth, $("nav").hasClass("open"));
		if(e.offsetX > 30
			&& e.offsetY > 55
			&& e.offsetY < 85
			&& (window.innerWidth - e.offsetX) <= 75
			&& (window.innerWidth - e.offsetX) >= 30)
		{
			$("nav").removeClass("open");
		} else if(window.innerWidth <= 768) {
			$("nav").addClass("open");
		}
	});
});