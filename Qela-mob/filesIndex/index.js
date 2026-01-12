// < !--Search -->
document
	.querySelector("#search-nav")
	.oninput = function () {
		let val = this
			.value
			.trim();
		let elasticItems = document.querySelectorAll(".--elastic li");
		if (val != "") {
			elasticItems.forEach(function (elem) {
				if (elem.innerText.search(val) == -1) {
					elem
						.classList
						.add("--hide");
				} else {
					elem
						.classList
						.remove("--hide");
				}
			});
		} else {
			elasticItems.forEach(function (elem) {
				elem
					.classList
					.remove("--hide");
			});
		}
	};
// ===============================================
let togButton = document.querySelector("#toggle-bg");
togButton.addEventListener("click", (event) => {
	event.preventDefault();

	const body = document.body;
	const aside = document.querySelector('aside.--aside');

	// Принудительно заставляем браузер подготовить стили aside перед сменой класса
	if (aside) {
		aside.style.willChange = 'background-color';
	}

	body
		.classList
		.toggle('night-theme');
	if (localStorage.getItem("theme") === "night-theme") {
		localStorage.removeItem("theme");
	} else {
		localStorage.setItem("theme", "night-theme");
	}
	addDarkClass();
});
// ==================================================
const burgerBtn = document.querySelector(".--burger");
const asideMenu = document.querySelector(".--aside");
burgerBtn.addEventListener("click", () => {
	burgerBtn
		.classList
		.toggle("active");
	asideMenu
		.classList
		.toggle("active");
});
// ==================================================
let title = document.querySelectorAll("h2.h1");
let ul = document.querySelector(".--elastic");
let li = ul.querySelectorAll("a");

let sections = document.querySelectorAll("section");
function ulSorted(type = "a") {
	let res = [];
	let res2 = [];
	for (let i = 0; i < li.length; i++) {
		res[i] = li[i].textContent;
		switch (type) {
			case "a":
				res.sort(function (e1, e2) {
					return e1 < e2
						? -1
						: 1;
				});
				break;
			case "z":
				res.sort(function (e1, e2) {
					return e1 > e2
						? -1
						: 1;
				});
				break;
		}
	}
	for (let i = 0; i < res.length; i++) {
		li[i].innerText = res[i];
		li[i].href = `#${res[i]
			.replace(/\W|_/g, "")
			.trim()
			.toLowerCase()}`;
	}
	for (let i = 0; i < title.length; i++) {
		res2[i] = title[i].textContent;
	}
	for (let i = 0; i < sections.length; i++) {
		sections[i].id = `${res2[i]
			.replace(/\W|_/g, "")
			.trim()
			.toLowerCase()}`;
	}
}
ulSorted("a");
if (li.length > 0 && sections.length > 0) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				li.forEach((link) => {
					link
						.classList
						.toggle("link--active", link.getAttribute("href").replace("#", "") === entry.target.id);
				});
			}
		});
	}, { threshold: 0.33 });

	sections.forEach((section) => observer.observe(section));
}
ul.addEventListener("click", (event) => {
	if (event.target.classList.contains("--link")) {
		event.preventDefault();
		const id = event
			.target
			.getAttribute("href")
			.replace("#", "");
		window.scrollTo({
			top: document
				.getElementById(id)
				.offsetTop - document
					.querySelector("header")
					.offsetHeight,
			behavior: "smooth"
		});
	}
});
// < !-- =========================== -->