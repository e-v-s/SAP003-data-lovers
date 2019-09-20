// const searchForCharacter = (inputChar, array, searchType) => {

// 	let arrayResult = [];

// 	for (let i of array) {
// 		switch (searchType) {
// 			case "name":
// 			if (i.name.toLowerCase().includes(inputChar.toLowerCase())) {
// 				arrayResult.push(i);
// 			} break;
// 			case "gender":
// 				if(i.gender.toLowerCase() === inputChar.toLowerCase()) {
// 				arrayResult.push(i);
// 			} break;
// 			case "status":
// 			if (i.species.toLowerCase() === inputChar.toLowerCase()) {
// 				arrayResult.push(i);
// 			} break;
// 			case "status":
// 			if (i.status.toLowerCase() === inputChar.toLowerCase()) {
// 				arrayResult.push(i);
// 			} break;
// 		}
// 	};
const searchForCharacter = (inputChar, array) => {
	
	let arrayResult = []

	for (let i of array) {
		if (i.name.toLowerCase().includes(inputChar.toLowerCase())) {
			arrayResult.push(i);
		}
	}
	//show all char with the definitions chosen above
	let character = "";

	for(let i of arrayResult) {
		character += `<div class="all-char">
		<p class="all-name" id="char-name-search">${i.name}</p>
		<p><img class="all-image" src="${i.image}"/></p>
		<p class="all-gender"> Gender: ${i.gender}</p>
		<p class="all-status"> Status: ${i.status}</p>
		<p class="all-species"> Species: ${i.species}</p>
		<p class="all-type"> Type: ${i.type}</p>
		<p class="all-origin"> Origin: ${i.origin.name}</p>
		<p class="all-location"> Location: ${i.location.name} </p>
		</div>`;
	}
	return character;
};

//search by radio button after selected option in select tag
const searchByRadioButton = (buttonValue, array, searchType) =>  {

	let statusResult = "";
	let genderResult = "";
	let speciesResult = array.filter(i => i.species === buttonValue);

	let type = [];
	
		if (searchType === "status") {
			statusResult = array.filter(i => i.status === buttonValue);
			for (let i of statusResult) {
				type +=`<div class="all-char">
				<p class="all-name" id="char-name-search">${i.name}</p>
				<p><img class="all-image" src="${i.image}"/></p>
				<p class="all-gender"> Gender: ${i.gender}</p>
				<p class="all-status"> Status: ${i.status}</p>
				<p class="all-species"> Species: ${i.species}</p>
				<p class="all-type"> Type: ${i.type}</p>
				<p class="all-origin"> Origin: ${i.origin.name}</p>
				<p class="all-location"> Location: ${i.location.name} </p>
				</div>`;
			}
		} else if (searchType === "gender") {
			genderResult = array.filter(i => i.gender === buttonValue);
			for (let i of genderResult) {
				type +=`<div class="all-char">
				<p class="all-name" id="char-name-search">${i.name}</p>
				<p><img class="all-image" src="${i.image}"/></p>
				<p class="all-gender"> Gender: ${i.gender}</p>
				<p class="all-status"> Status: ${i.status}</p>
				<p class="all-species"> Species: ${i.species}</p>
				<p class="all-type"> Type: ${i.type}</p>
				<p class="all-origin"> Origin: ${i.origin.name}</p>
				<p class="all-location"> Location: ${i.location.name} </p>
				</div>`;
			}
		} else if (searchType === "species") {
			speciesResult = array.filter(i => i.species === buttonValue);
			for (let i of speciesResult) {
				type +=`<div class="all-char">
				<p class="all-name" id="char-name-search">${i.name}</p>
				<p><img class="all-image" src="${i.image}"/></p>
				<p class="all-gender"> Gender: ${i.gender}</p>
				<p class="all-status"> Status: ${i.status}</p>
				<p class="all-species"> Species: ${i.species}</p>
				<p class="all-type"> Type: ${i.type}</p>
				<p class="all-origin"> Origin: ${i.origin.name}</p>
				<p class="all-location"> Location: ${i.location.name} </p>
				</div>`;
			}
		}
	return type;
};

//function to get every data of every character
let imageAllChar = "";

const showAllChar = (array) => {

	for(let i of array) {
		imageAllChar += `<div class="all-char">
		<p class="all-name" id="char-name-search">${i.name}</p>
		<p><img class="all-image" src="${i.image}"/></p>
		<p class="all-gender"> Gender: ${i.gender}</p>
		<p class="all-status"> Status: ${i.status}</p>
		<p class="all-species"> Species: ${i.species}</p>
		<p class="all-type"> Type: ${i.type}</p>
		<p class="all-origin"> Origin: ${i.origin.name}</p>
		<p class="all-location"> Location: ${i.location.name} </p>
		</div>`;
	}
	return imageAllChar;
};


window.data = {
	searchForCharacter: searchForCharacter,
	showAllChar: showAllChar,
	searchByRadioButton: searchByRadioButton
};