var colors = ["red", "green", "blue"];
var colorIndex = 0;
var size = 200;

function updateSize() {
	$("#balloon").css({ width: size + "px", height: size + "px" });
}

$("#balloon").on("click", function () {
	size += 10;
	colorIndex = (colorIndex + 1) % colors.length;
	$(this).css("background-color", colors[colorIndex]);

	if (size > 420) {
		size = 200;
	}
	updateSize();
});

$("#balloon").on("mouseleave", function () {
	size -= 5;
	if (size < 200) {
		size = 200;
	}
	colorIndex = (colorIndex - 1 + colors.length) % colors.length;
	$(this).css("background-color", colors[colorIndex]);
	updateSize();
});