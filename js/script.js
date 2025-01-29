"use strict";

const tabBtns = document.querySelectorAll(".tabBtn__link");
const newTabBtns = Array.from(tabBtns);

newTabBtns.forEach((newTabBtn) => {
	newTabBtn.addEventListener("click", function () {
		const dataContent = this.dataset.tab;
		const tabContent = document.getElementById(dataContent);

		const tabBtns = document.querySelectorAll(".tabBtn__link");
		const allTabContent = document.querySelectorAll(".tabContent");

		for (let i = 0; i < tabBtns.length; i++) {
			tabBtns[i].classList.remove("active");
		}

		for (let j = 0; j < allTabContent.length; j++) {
			allTabContent[j].style.display = "none";
			// allTabContent[j].style.visibility = "hidden";
			// allTabContent[j].style.opacity = 0;
		}

		tabContent.style.display = "block";
		// tabContent.style.visibility = "visible";
		// tabContent.style.opacity = 1;
		this.classList.add("active");
	});
});

// *** Simulate a click on the first tab button to activate it and show its content when the page loads ***
document.querySelector(".tabBtn__link").click();
