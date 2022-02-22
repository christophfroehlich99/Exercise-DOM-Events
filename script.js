var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var getLi = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	let button2 = document.createElement("button");
	button2.append(document.createTextNode("delete"));
	button2.classList.add("delete");
	li.appendChild(document.createTextNode(input.value));
	li.append(button2);
	ul.appendChild(li);
	input.value = "";
	getLi = document.querySelectorAll("li");

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function deleteParent(input) {
		console.log("yep");
	input.target.parentNode.remove();
}


function toggleClassAfterClick(input) {
	input.target.classList.toggle("done");
}

function ulClick(input){
	if (input.target.tagName ==="LI"){
		toggleClassAfterClick(input);
	}
	else if (input.target.className === "delete"){
		deleteParent(input);
	}
}

//"this.parentNode.remove()"
ul.addEventListener("click", ulClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);