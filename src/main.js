document.getElementById("btn-char").addEventListener("click", function() {
		searchCharacter();
		cleanInputBox();
});

let array = RICKANDMORTY.results;

//these create options on select tag
const genderSelect = `<option value="gender">${(Object.keys(array[0]))[5]}</option>`;
const speciesSelect = `<option value="species">${(Object.keys(array[0]))[3]}</option>`;
const statusSelect = `<option value="status">${(Object.keys(array[0]))[2]}</option>`;

document.getElementById("search-type").innerHTML = genderSelect + speciesSelect + statusSelect;

//Function for the search input
const searchCharacter = () => {

	const inputChar = document.getElementById("char-value").value;

	document.getElementById("show-images-of-all-char").innerHTML = window.data.searchForCharacter(inputChar, array);	
};

//função teste dos radiobuttons
const openRadioButton = () => {
	document.getElementById("print-here").innerHTML = "";

	const selectValue = document.getElementById("search-type").value;

	const arrayMap = array.map(item => item[selectValue]);

	let newArray = arrayMap.filter((item, index) => arrayMap.indexOf(item) === index);

	// document.getElementById("show-images-of-all-char").innerHTML = window.data.searchForCharacter(newArray, selectValue);	

	document.getElementById("print-here").innerHTML += `${newArray.map(item => `<input class="checkbox" name="radio" type="radio" value="${item}">${item}</input>`)}`;
};


const submit = () => {
	event.preventDefault();

	buttonValue = document.querySelector(".checkbox:checked").value;

	document.getElementById("show-images-of-all-char").innerHTML = window.data.searchByRadioButton(buttonValue, array);

	document.getElementById("form-search").reset();
}


//function to show all characters at homepage
const showEverybody = () => {
	let showAllChar = window.data.showAllChar(array);

	document.getElementById("show-images-of-all-char").innerHTML = imageAllChar;
}

//function to clean input box
const cleanInputBox = () => {
	document.getElementById("char-value").value = "";
}

window.onload = function() {
	searchCharacter();
	showEverybody();
	cleanInputBox();
	openRadioButton();
	submit();
}

document.getElementById("search-type").addEventListener("change", openRadioButton);
document.getElementById("btn-search-type").addEventListener("click", submit);