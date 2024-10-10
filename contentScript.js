console.log("Chokuzon Loaded")
const url = location.href
const pattern = /^(http|https):\/\/(www\.)?amazon\.co\.jp\/s/i;

if (pattern.test(url)) {
	const element = document.querySelectorAll(".a-section.a-spacing-small.a-spacing-top-small")[0];
	if (!url.includes("AN1VRQENFRJN5")) {
		const button = document.createElement("button")
		button.innerText = "Amazon直販に絞る"
		button.id = "chokuzon"
		button.onclick = chokuzon
		element.appendChild(button)
	}else{
		const text = document.createElement("span")
		text.innerText = "Amazon直販のみを表示しています"
		text.classList.add("chokuhan")
		element.appendChild(text)
	}
}

function chokuzon(){
	location.href = location.href + "&emi=AN1VRQENFRJN5";
}
