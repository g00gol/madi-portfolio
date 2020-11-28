//AOS
$(function () {
	AOS.init();
});

//Parallax
window.addEventListener("scroll", function (e) {
	const target = document.querySelectorAll(".h1, .p, #down");

	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
		} else {
			var posX = window.pageYOffset * target[index].dataset.ratex;
			var posY = window.pageYOffset * target[index].dataset.ratey;

			target[index].style.transform =
				"translate3d(" + posX + "px, " + posY + "px, 0px)";
		}
	}
});
window.addEventListener("scroll", function (e) {
	const target = document.querySelectorAll(".more-info");

	var index = 0,
		length = target.length;
	for (index; index < length; index++) {
		var pos = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === "vertical") {
			target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
		} else {
			var posX = window.pageYOffset * target[index].dataset.ratex;
			var posY = window.pageYOffset * target[index].dataset.ratey;

			target[index].style.transform =
				"translate3d(" + posX + "px, " + posY + "px, 0px)";
		}
	}
});

//Smooth Scroll
//Nav
$(document).ready(function () {
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});

//Scroll Hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("nav").style.top = "0";
	} else {
		document.getElementById("nav").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
};

//Validate Email
function validation() {
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text");
	var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

	if (pattern.test(email)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Valid";
		text.style.color = "#00ff00";
	}
	if (!pattern.test(email)) {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Invalid E-mail";
		text.style.color = "#ff0000";
	}
}
