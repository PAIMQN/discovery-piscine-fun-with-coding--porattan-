var list = document.getElementById("ft_list");
var newBtn = document.getElementById("newBtn");

function getCookie(name) {
	var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; max-age=" + (60 * 60 * 24 * 365);
}

function saveList() {
	var items = [];
	var todos = list.querySelectorAll(".todo-item");
	todos.forEach(function (el) {
		items.push(el.textContent);
	});
	setCookie("todoList", JSON.stringify(items));
}

function createTodoElement(text) {
	var div = document.createElement("div");
	div.className = "todo-item";
	div.textContent = text;

	div.addEventListener("click", function () {
		var confirmDelete = confirm("Are you sure you want to remove this to-do item?");
		if (confirmDelete) {
			div.remove();
			saveList();
		}
	});

	return div;
}

function addTodo(text) {
	var el = createTodoElement(text);
	list.insertBefore(el, list.firstChild);
	saveList();
}

newBtn.addEventListener("click", function () {
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
			var el = createTodoElement(text);
			list.appendChild(el);
		});
	}
}

loadList();