document.getElementById("btn-char").addEventListener("click", function() {
		example();
		cleanInputBox();
});

let array = RICKANDMORTY.results;

//Function for the search input
const example = () => {		

	const inputChar = document.getElementById("char-name").value;
	window.data.searchForCharacter(inputChar, array);

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

//function to filter characters
// const filterFunction = (array) => {

// 	for (let i of array) {
// 		// let results = array.filter

// 		console.log(i.species);
// 	}	
// }

// filterFunction(array);

//function to create options inside select tag
const select = () => {
	
	const value = ["Selecione uma opção","gender", "species", "origin", "status", "type", "location"];
	
	for (let i of value) {
		document.getElementById("select-by-properties").innerHTML += `<option value="${i}">${i}</option>`; 
	}

	document.getElementById("select-by-properties").addEventListener("change", filterFunction);
}

const valueOption = document.getElementById("select-by-properties");

//function to test select() function. This must 
// const fun = () => {
	
// 	document.getElementById("test-here").innerHTML = "opa";
// }

window.onload = function() {
	example();
	showEverybody();
	cleanInputBox();
	select();
}



