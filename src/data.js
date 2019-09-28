//search character by name
//inputChar is the user's input
//array is the object.results, which contains every character
const searchForCharacter = (inputChar, array) => {
	
  let arrayResult = [];

  //includes every character inside arrayResults which includes the input from the user
  for (let i of array) {
    if (i.name.toLowerCase().includes(inputChar.toLowerCase())) {
      arrayResult.push(i);
    }
  }

  //show all char pushed to the arrayResult in cards
  let character = [];

  for (let i of arrayResult) {
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
const searchByRadioButton = (buttonValue, array, searchType) => {

  let type = [];
	
  //first check the searchType chosen by the user in the select tag
  if (searchType === "status") {
    //then the result is filtered comparing the values inside the searchType with the buttonValue chosen by the user
    let statusResult = array.filter(i => i.status === buttonValue);
    //just a for running through the result array to print the cards with the characers
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
    let genderResult = array.filter(i => i.gender === buttonValue);
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
    let speciesResult = array.filter(i => i.species === buttonValue);
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

  for (let i of array) {
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

//Dashboard functions

//Gender counter
//let femPerc, malePerc,gendUnkPerc, genssPerc;

const charCountGender = () => {

	const size = array.length;

	const arrayGender = array.map(item => item.gender);

	const female = Number(((((arrayGender.filter(i => i === "Female")).length)/size)*100).toFixed(1));
	const male = Number(((((arrayGender.filter(i => i === "Male")).length)/size)*100).toFixed(1));
	const genderless = Number(((((arrayGender.filter(i => i === "Genderless")).length)/size)*100).toFixed(1));
	const genderUnknown = Number(((((arrayGender.filter(i => i === "unknown")).length)/size)*100).toFixed(1));

	//percentage
	return {female, male, genderUnknown, genderless, size};
};

//Status counter
const charCountStatus = () => {

	const size = array.length;

	const arrayStatus = array.map(item => item.status);

	const alive = Number(((((arrayStatus.filter(i => i === "Alive")).length)/size)*100).toFixed(1));
	const dead = Number(((((arrayStatus.filter(i => i === "Dead")).length)/size)*100).toFixed(1));
	const statusUnknown = Number(((((arrayStatus.filter(i => i === "unknown")).length)/size)*100).toFixed(1));

	return {alive, dead, statusUnknown, size};
};

//Species counter
const charCountSpecies = () => {

	const arraySpecies = array.map(item => item.species);

	const size = array.length;

	const human = Number(((((arraySpecies.filter( i => i === "Human")).length)/size)*100).toFixed(1));
	const alien = Number(((((arraySpecies.filter(i => i === "Alien")).length)/size)*100).toFixed(1));
	const humanoid = Number(((((arraySpecies.filter(i => i === "Humanoid")).length)/size)*100).toFixed(1));
	const speciesUnknown = Number(((((arraySpecies.filter(i => i === "unknown")).length)/size)*100).toFixed(1));
	const poopybutthole = Number(((((arraySpecies.filter(i => i === "Poopybutthole")).length)/size)*100).toFixed(1));
	const mytholog = Number(((((arraySpecies.filter(i => i === "Mytholog")).length)/size)*100).toFixed(1));
	const animal = Number(((((arraySpecies.filter(i => i === "Animal")).length)/size)*100).toFixed(1));
	const vampire = Number(((((arraySpecies.filter(i => i === "Vampire")).length)/size)*100).toFixed(1));
	const robot = Number(((((arraySpecies.filter(i => i === "Robot")).length)/size)*100).toFixed(1));
	const cronenberg = Number(((((arraySpecies.filter(i => i === "Cronenberg")).length)/size)*100).toFixed(1));
	const disease = Number(((((arraySpecies.filter(i => i === "Disease")).length)/size)*100).toFixed(1));
	const parasite = Number(((((arraySpecies.filter(i => i === "Parasite")).length)/size)*100).toFixed(1));

	return {human, alien, humanoid, speciesUnknown, poopybutthole, mytholog, animal, vampire, robot, cronenberg, disease, parasite, size};
};

const charCountSpeciesByGender = () => {
	
	//HUMAN
	const arraySpeciesHuman = array.filter(i => i.species === "Human");

	const sizeHuman = arraySpeciesHuman.length;

	const humanFemale = arraySpeciesHuman.filter(i => i.gender === "Female").length;
	const humanMale = arraySpeciesHuman.filter(i => i.gender === "Male").length;
	const humanUnknown = arraySpeciesHuman.filter(i => i.gender === "unknown").length;
	const humanGenderless = arraySpeciesHuman.filter(i => i.gender === "Genderless").length;

	//ALIEN
	const arraySpeciesAlien = array.filter(i => i.species === "Alien");

	const sizeAlien = arraySpeciesAlien.length;

	const alienFemale = arraySpeciesAlien.filter(i => i.gender === "Female").length;
	const alienMale = arraySpeciesAlien.filter(i => i.gender === "Male").length;
	const alienUnknown = arraySpeciesAlien.filter(i => i.gender === "unknown").length;
	const alienGenderless = arraySpeciesAlien.filter(i => i.gender === "Genderless").length;

	//HUMANOID
	const arraySpeciesHumanoid = array.filter(i => i.species === "Humanoid");

	const humanoidFemale = arraySpeciesHumanoid.filter(i => i.gender === "Female").length;
	const humanoidMale = arraySpeciesHumanoid.filter(i => i.gender === "Male").length;
	const humanoidUnknown = arraySpeciesHumanoid.filter(i => i.gender === "unknown").length;
	const humanoidGenderless = arraySpeciesHumanoid.filter(i => i.gender === "Genderless").length;

	//SPECIES UNKNOWN
	const arraySpeciesUnknown = array.filter(i => i.species === "unknown");

	const speciesUnknownFemale = arraySpeciesUnknown.filter(i => i.gender === "Female").length;
	const speciesUnknownMale = arraySpeciesUnknown.filter(i => i.gender === "Male").length;
	const speciesUnknownUnknown = arraySpeciesUnknown.filter(i => i.gender === "unknown").length;
	const speciesUnknownGenderless = arraySpeciesUnknown.filter(i => i.gender === "Genderless").length;

	//POOPYBUTTHOLE
	const arrayPoopybutthole = array.filter(i => i.species === "Poopybutthole");

	const poopybuttholeFemale = arrayPoopybutthole.filter(i => i.gender === "Female").length;
	const poopybuttholeMale = arrayPoopybutthole.filter(i => i.gender === "Male").length;
	const poopybuttholeUnknown = arrayPoopybutthole.filter(i => i.gender === "unknown").length;
	const poopybuttholeGenderless = arrayPoopybutthole.filter(i => i.gender === "Genderless").length;

	//MYTHLOG
	const arrayMytholog = array.filter(i => i.species === "Mytholog");

	const mythologFemale = arrayMytholog.filter(i => i.gender === "Female").length;
	const mythologMale = arrayMytholog.filter(i => i.gender === "Male").length;
	const mythologUnknown = arrayMytholog.filter(i => i.gender === "unknown").length;
	const mythologGenderless = arrayMytholog.filter(i => i.gender === "Genderless").length;

	//ANIMAL
	const arrayAnimal = array.filter(i => i.species === "Animal");

	const animalFemale = arrayAnimal.filter(i => i.gender === "Female").length;
	const animalMale = arrayAnimal.filter(i => i.gender === "Male").length;
	const animalUnknown = arrayAnimal.filter(i => i.gender === "unknown").length;
	const animalGenderless = arrayAnimal.filter(i => i.gender === "Genderless").length;

	//VAMPIRE
	const arrayVampire = array.filter(i => i.species === "Vampire");

	const vampireFemale = arrayVampire.filter(i => i.gender === "Female").length
	const vampireMale = arrayVampire.filter(i => i.gender === "Male").length
	const vampireUnknown = arrayVampire.filter(i => i.gender === "unknown").length
	const vampireGenderless = arrayVampire.filter(i => i.gender === "Genderless").length

	//ROBOT
	const arrayRobot = array.filter(i => i.species === "Robot");

	const robotFemale = arrayRobot.filter(i => i.gender === "Female").length;
	const robotMale = arrayRobot.filter(i => i.gender === "Male").length;
	const robotUnknown = arrayRobot.filter(i => i.gender === "unknown").length;
	const robotGenderless = arrayRobot.filter(i => i.gender === "Genderless").length;

	//CRONENBERG
	const arrayCronenberg = array.filter(i => i.species === "Cronenberg");

	const cronenbergFemale = arrayCronenberg.filter(i => i.gender === "Female").length;
	const cronenbergMale = arrayCronenberg.filter(i => i.gender === "Male").length;
	const cronenbergUnknown = arrayCronenberg.filter(i => i.gender === "unknown").length;
	const cronenbergGenderless = arrayCronenberg.filter(i => i.gender === "Genderless").length;

	//DISEASE
	const arrayDisease = array.filter(i => i.species === "Disease");

	const diseaseFemale = arrayDisease.filter(i => i.gender === "Female").length;
	const diseaseMale = arrayDisease.filter(i => i.gender === "Male").length;
	const diseaseUnknown = arrayDisease.filter(i => i.gender === "unknown").length;
	const diseaseGenderless = arrayDisease.filter(i => i.gender === "Genderless").length;

	//PARASITE
	const arrayParasite = array.filter(i => i.species === "Parasite");

	const parasiteFemale = arrayParasite.filter(i => i.gender === "Female").length;
	const parasiteMale = arrayParasite.filter(i => i.gender === "Male").length;
	const parasiteUnknown = arrayParasite.filter(i => i.gender === "unknown").length;
	const parasiteGenderless = arrayParasite.filter(i => i.gender === "Genderless").length;

	return {humanFemale, humanMale, humanGenderless, humanUnknown, alienFemale, alienMale, alienGenderless, alienUnknown,humanoidFemale, humanoidMale, humanoidGenderless, humanoidUnknown,speciesUnknownFemale, speciesUnknownMale, speciesUnknownGenderless, speciesUnknownUnknown, poopybuttholeFemale, poopybuttholeMale, poopybuttholeGenderless, poopybuttholeUnknown, mythologFemale, mythologMale, mythologGenderless, mythologUnknown, animalFemale, animalMale, animalGenderless, animalUnknown, vampireFemale, vampireMale, vampireGenderless, vampireUnknown, robotFemale, robotMale, robotGenderless, robotUnknown, cronenbergFemale, cronenbergMale, cronenbergGenderless, cronenbergUnknown, diseaseFemale, diseaseMale, diseaseGenderless, diseaseUnknown, parasiteFemale, parasiteMale, parasiteUnknown, parasiteGenderless, sizeHuman, sizeAlien};
};

const example = (searchType, array) => {
	const arrayGender = array.filter(i => i.species === searchType);
  
  const arrayFemale = arrayGender.filter(i => (i.gender === "Female"));
      
  const arrayMale = arrayGender.filter(i => i.gender === "Male");

  const arrayGenderless = arrayGender.filter(i => i.gender === "Genderless");

  const arrayUnknown = arrayGender.filter(i => i.gender === "unknown");

  const typethis = `
          <div class="dashboard-sp-st">
            <div class="st-sp female">
            	<p class="num-mini">${((arrayFemale.length/arrayGender.length)*100).toFixed(1)}%</p>
            	<p>Female</p>
            </div>
            <div class="st-sp male">
            	<p class="num-mini">${((arrayMale.length/arrayGender.length)*100).toFixed(1)}%</p>
            	<p>Male</p>
            </div>
            <div class="st-sp genderless">
            	<p class="num-mini">${((arrayGenderless.length/arrayGender.length)*100).toFixed(1)}%</p>
            	<p>Genderless</p>
            </div>
            <div class="st-sp gender-unknown">
            	<p class="num-mini">${((arrayUnknown.length/arrayGender.length)*100).toFixed(1)}%</p>
            	<p>Unknown</p>
            </div>
          </div>`;

  return typethis;
};

window.data = {
  searchForCharacter: searchForCharacter,
  showAllChar: showAllChar,
  searchByRadioButton: searchByRadioButton,
  charCountGender: charCountGender,
  charCountStatus: charCountStatus,
  charCountSpecies: charCountSpecies,
  charCountSpeciesByGender: charCountSpeciesByGender,
  example: example,
}; 