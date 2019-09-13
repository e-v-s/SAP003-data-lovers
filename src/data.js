// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

let image ="";
let text = "";
const searchForCharacter = (inputChar, array) => {


	for (let i of array) {
		if (i.name.toLowerCase() === inputChar.toLowerCase()) {			
			image = i.image;
			text = i.name + " " + i.species + " " + i.origin.name;				
		}
	return image, text;
};


// const example = () => {	
// 	document.getElementById("btn-char").addEventListener("click", example);
// 	let inputChar = document.getElementById("char-name").value;	

// 	const array = RICKANDMORTY.results;

// 	for (let i of array) {
// 		if (i.name.toLowerCase() === inputChar.toLowerCase()) {
// 			let imageLoad = document.getElementById('test-image').innerHTML = `<img src="${i.image}"/>`;

// 			let text = document.getElementById('test-here-name').innerHTML = i.name + " " + i.species + " " + i.origin.name;
// 			return text + imageLoad
// 		}
// 	}

	// for (let i=0; i < RICKANDMORTY.results.length; i++) {
	// 	let name = RICKANDMORTY.results.filter(char => char.name);
	// 	let species = RICKANDMORTY.results.filter(char => char.species);
	// 	let status = RICKANDMORTY.results.filter(char => char.status);
	// 	let type = RICKANDMORTY.results.filter(char => char.type);
	// 	let gender = RICKANDMORTY.results.filter(char => char.gender);
	// 	let origin = RICKANDMORTY.results.filter(char => char.origin.name);
	// 	let location = RICKANDMORTY.results.filter(char => char.location.name);
	// 	let image = RICKANDMORTY.results.filter(char => char.image);

	// 	if (name[i].name === inputChar) {
	// 		let imageLoad = document.getElementById('test-image');
	// 		imageLoad.innerHTML = `<img src="${image[i].image}"/>`;

	// 		let text = document.getElementById('test-here-name').innerHTML = name[i].name + " " + species[i].species + " " + origin[i].origin.name;
	// 		return text + imageLoad
	// 	}

		//imageLoad = document.getElementById('test-image').innerHTML += 
		// text = document.getElementById('test-here-name').innerHTML += name[i].name + " " + species[i].species + " " + origin[i].origin.name + `<img src="` + image[i].image + `"/>`;
		
		
	//}	
	// return text
};

window.data = {
	searchForCharacter: searchForCharacter
};



