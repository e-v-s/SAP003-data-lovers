let array = RICKANDMORTY.results;

//Function for the search input
const example = () => {		

	const inputChar = document.getElementById("char-name").value;
	let characterFound = window.data.searchForCharacter(inputChar, array);

	document.getElementById("image").innerHTML = `<img src="${image}"/>`;
	document.getElementById("name").innerHTML = name;
	document.getElementById("species").innerHTML = species;
	document.getElementById("origin").innerHTML = origin;
	document.getElementById("gender").innerHTML = gender;
	document.getElementById("status").innerHTML = status;
	document.getElementById("type").innerHTML = type;
	document.getElementById("living").innerHTML = living;
};

//function to show all characters at homepage
const showEverybody = () => {
	let showAllChar = window.data.showAllChar(array);

	document.getElementById("show-images-of-all-char").innerHTML += imageAllChar;
}

//function to clean input box
const cleanInputBox = () => {
	document.getElementById("char-name").value = "";
}


const filterFunction = (array) => {

	for (let i of array) {
		let results = array.filter

		console.log(i.species);
	}	
}

filterFunction(array);

document.getElementById("btn-char").addEventListener("click", function() {
		example();
		cleanInputBox();
	});

window.onload = function() {
	example();
	showEverybody();
	cleanInputBox();
}



