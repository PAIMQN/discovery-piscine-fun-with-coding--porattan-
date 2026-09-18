var form = document.getElementById("calcForm");
var leftInput = document.getElementById("left");
var rightInput = document.getElementById("right");
var operatorSelect = document.getElementById("operator");

function isPositiveInteger(value) {
	return /^[0-9]+$/.test(value);
}

form.addEventListener("submit", function (e) {
	e.preventDefault();

	var left = leftInput.value;
	var right = rightInput.value;
	var operator = operatorSelect.value;

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