document.getElementById("btn-char").addEventListener("click", function() {
		searchCharacter();
		cleanInputBox();
});



let array = RICKANDMORTY.results;

//these create options on select tag
const nameSelect = `<option value="name">${(Object.keys(array[0]))[1]}</option>`;
const genderSelect = `<option value="gender">${(Object.keys(array[0]))[5]}</option>`;
const speciesSelect = `<option value="species">${(Object.keys(array[0]))[3]}</option>`;
const statusSelect = `<option value="status">${(Object.keys(array[0]))[2]}</option>`;

document.getElementById("search-type").innerHTML = nameSelect + genderSelect + speciesSelect + statusSelect;

//Function for the search input
const searchCharacter = () => {

	const inputChar = document.getElementById("char-value").value;
	const searchType = document.getElementById("search-type").value;

	document.getElementById("show-images-of-all-char").innerHTML = window.data.searchForCharacter(inputChar, array, searchType);	
};

//dropdown menu
const openDropdown = () => {
	document.getElementById("search-dropdown").innerHTML = "";

	const selectValue = document.getElementById("search-type").value;

	const arrayMap = array.map(item => item[selectValue]);

	let newArray = arrayMap.filter((item, index) => arrayMap.indexOf(item) === index);

	// document.getElementById("show-images-of-all-char").innerHTML = window.data.searchForCharacter(newArray, selectValue);	

	document.getElementById("search-dropdown").innerHTML += `${newArray.map(item => `<option value="${item}">${item}</option>`)}`;	
};

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
	openDropdown();
}

document.getElementById("search-type").addEventListener("change", openDropdown);

