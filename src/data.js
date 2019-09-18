// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
//function to get the data from a specific char searched by the user
const searchForCharacter = (inputChar, array, searchType) => {

	let arrayResult = [];

	for (let i of array) {
		switch (searchType) {
			case "name":
			if (i.name.toLowerCase().includes(inputChar.toLowerCase())) {
				arrayResult.push(i);
			} break;
			case "gender":
				if(i.gender.toLowerCase() === inputChar.toLowerCase()) {
				arrayResult.push(i);
			} break;
			case "status":
			if (i.species.toLowerCase() === inputChar.toLowerCase()) {
				arrayResult.push(i);
			} break;
			case "status":
			if (i.status.toLowerCase() === inputChar.toLowerCase()) {
				arrayResult.push(i);
			} break;
		}
	};

	//creating new select option for gender

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
	showAllChar: showAllChar
};



