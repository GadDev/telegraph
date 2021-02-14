const Utils = require("./utils");
const listComments = document.getElementById("comments-list");
const items = listComments.querySelectorAll("li");
const btnLikes = document.getElementById("likes-btn");
const btnNewest = document.getElementById("newest-btn");

new Utils();

function sortList(items, type) {
	Array.from(items)
		.sort(function (a, b) {
			if (type === "data-time") {
				return new Date(b.getAttribute(type)) - new Date(a.getAttribute(type));
			} else {
				return b.getAttribute(type) - a.getAttribute(type);
			}
		})
		.forEach(function (el) {
			el.parentNode.appendChild(el);
		});
}

btnLikes.addEventListener("click", () => {
	sortList(items, "data-likes");
});

btnNewest.addEventListener("click", () => {
	sortList(items, "data-time");
});
