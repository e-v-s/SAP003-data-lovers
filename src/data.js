// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

const example = () => {
	let arrayId = [];
	let arrayName = [];
	let arrayStatus = [];
	arraySpecies = [];
	arrayType = [];
	arrayGender
	arrayOrigin
	arrayLocation
	arrayImage
	arrayEpisode

	for (let i=0; i < RICKANDMORTY.results.length; i++) {
		arrayId.push(RICKANDMORTY.results[i].id);
		arrayName.push(RICKANDMORTY.results[i].name);
		arrayStatus.push(RICKANDMORTY.results[i].status);
		arraySpecies.push(RICKANDMORTY.results[i].species);
		arrayType.pu
		arrayGender
		arrayOrigin
		arrayLocation
		arrayImage
		arrayEpisode
		
	}
	return [arrayId[0], arrayName[0], arrayStatus[0]];
	
	//return document.getElementById("test-here").innerHTML = (RICKANDMORTY.results.length);

};

window.example = example;
