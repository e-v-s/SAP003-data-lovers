// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

//function to get the data from a specific char searched by the user

let image ="";
let name = "";
let species = "";
let origin = "";
let gender = "";
let status = "";
let type = "";
let living = "";

const searchForCharacter = (inputChar, array) => {

	for (let i of array) {
		if (i.name.toLowerCase() === inputChar.toLowerCase()) {			
			image = i.image;
			name = i.name;
			species = i.species;
			origin = i.origin.name;	
			gender = i.gender;
			status = i.status;
			type = i.type;
			living = i.location.name;			
		}
	}
	return image, name, species, origin, gender, status, type, living;
};

//function to get every data of every character
let imageAllChar = "";

const showAllChar = (array) => {

	for(let i of array) {
		imageAllChar += `<div class="all-char">
		<p class="all-name">${i.name}</p>
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



