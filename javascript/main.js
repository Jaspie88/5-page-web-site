
$(document).ready(function () {
		// Load header.html and run the code once it's loaded
		$("header").load("/html/header.html", function() {
				const hamburger = document.querySelector(".hamburger");
				const navMenu = document.querySelector(".nav-menu");

				hamburger.addEventListener("click", () => {
						hamburger.classList.toggle("active");
						navMenu.classList.toggle("active");
				});

				document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
						hamburger.classList.remove("active");
						navMenu.classList.remove("active");
				}));
		});

		// Load footer.html
		$("footer").load("/html/footer.html");
});
