$("#btn").on("click", function () {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	$("body").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
});