// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const example = () => {
	
	let arrayId = [];
	let arrayName = [];
	let arrayStatus = [];
	let arraySpecies = [];
	// arrayType = [];
	// arrayGender
	// arrayOrigin
	// arrayLocation
	// arrayImage
	// arrayEpisode

	for (let i=0; i < RICKANDMORTY.results.length; i++) {
		arrayId.push(RICKANDMORTY.results[i].id);
		arrayName.push(RICKANDMORTY.results[i].name);
		arrayStatus.push(RICKANDMORTY.results[i].status);
		arraySpecies.push(RICKANDMORTY.results[i].species);
		// arrayType.pu
		// arrayGender
		// arrayOrigin
		// arrayLocation
		// arrayImage
		// arrayEpisode
		
	}
	return example2(arrayId, arrayStatus);
	//return document.getElementById("test-here").innerHTML = (RICKANDMORTY.results.length);
};

const example2 = (arrayId, arrayStatus) => {
	console.log(arrayId, arrayStatus);
}
	



window.example = example;
window.example2 = example2;
