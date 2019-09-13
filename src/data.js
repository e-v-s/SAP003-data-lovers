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
	}
};

window.data = {
	searchForCharacter: searchForCharacter
};



