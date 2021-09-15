var container = document.querySelector(".container");
var rect = `<div class="rect"></div>`;

function addElements() {
	for(let i=0; i<5; i++) {
		const div = document.createRange().createContextualFragment(rect).firstChild;
		div.id = i+1;
		div.onmouseenter = function(event) {
			const rects = document.querySelectorAll(".rect");
			rects.forEach(rect => {
				if(rect.id <= event.target.id) {
					rect.classList.add("highlight");
				} else {
					rect.classList.remove("highlight");
				}
			});
		}

		div.onmouseleave = function() {
			const rects = document.querySelectorAll(".rect");
			rects.forEach(rect => {
				rect.classList.remove("highlight");
			});
		}
		container.appendChild(div);
	}
}

function main() {
	addElements();

}

main();