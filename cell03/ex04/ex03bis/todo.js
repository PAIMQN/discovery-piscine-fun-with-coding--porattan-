function getCookie(name) {
	var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; max-age=" + (60 * 60 * 24 * 365);
}

function saveList() {
	var items = [];
	$("#ft_list .todo-item").each(function () {
		items.push($(this).text());
	});
	setCookie("todoList", JSON.stringify(items));
}

function createTodoElement(text) {
	var $div = $("<div>").addClass("todo-item").text(text);

	$div.on("click", function () {
		var confirmDelete = confirm("Are you sure you want to remove this to-do item?");
		if (confirmDelete) {
			$div.remove();
			saveList();
		}
	});

	return $div;
}

function addTodo(text) {
	var $el = createTodoElement(text);
	$("#ft_list").prepend($el);
	saveList();
}

$("#newBtn").on("click", function () {
	var text = prompt("Enter a new TO DO:");
	if (text !== null && text.trim() !== "") {
		addTodo(text.trim());
	}
});

function loadList() {
	var saved = getCookie("todoList");
	if (saved) {
		var items = JSON.parse(saved);
		items.forEach(function (text) {
			$("#ft_list").append(createTodoElement(text));
		});
	}
}

loadList();