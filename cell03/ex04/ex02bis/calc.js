// ตรวจว่าเป็นจำนวนเต็มบวก (>= 0) หรือไม่
function isPositiveInteger(value) {
	return /^[0-9]+$/.test(value);
}

$("#calcForm").on("submit", function (e) {
	e.preventDefault();

	var left = $("#left").val();
	var right = $("#right").val();
	var operator = $("#operator").val();

	if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
		alert("Error :(");
		return;
	}

	var a = parseInt(left, 10);
	var b = parseInt(right, 10);
	var result;

	if ((operator === "/" || operator === "%") && b === 0) {
		alert("It's over 9000!");
		return;
	}

	switch (operator) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = a - b;
			break;
		case "*":
			result = a * b;
			break;
		case "/":
			result = a / b;
			break;
		case "%":
			result = a % b;
			break;
	}

	console.log(result);
	alert(result);
});

setInterval(function () {
	alert("Please, use me...");
}, 30000);