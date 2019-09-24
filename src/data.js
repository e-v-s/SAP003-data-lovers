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
	const male = (arrayGender.filter(i => i === "Male")).length;
	const genderless = Number(((((arrayGender.filter(i => i === "Genderless")).length)/size)*100).toFixed(1));
	const genderUnknown = Number((((arrayGender.filter(i => i === "unknown")).length)/size).toFixed(1));

	//percentage
	return {female, male, genderUnknown, genderless};
};

//Status counter
const charCountStatus = () => {

	const size = array.length;
  
	const arrayStatus = array.map(item => item.status);
	
	const alive = Number(((((arrayStatus.filter(i => i === "Alive")).length)/size)*100).toFixed(1));
	const dead = Number((((arrayStatus.filter(i => i === "Dead")).length)/size).toFixed(1));
	const statusUnknown = Number(((((arrayStatus.filter(i => i === "unknown")).length)/size)*100).toFixed(1));

	return {alive, dead, statusUnknown};

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

	return {human, alien, humanoid, speciesUnknown, poopybutthole, mytholog, animal, vampire, robot, cronenberg, disease, parasite};
};

const charCountSpeciesByGender = () => {
	
	//HUMAN
	const arraySpeciesHuman = array.filter(i => i.species === "Human");
	const sizeHuman = arraySpeciesHuman.length;

	const humanFemale = Number(((((arraySpeciesHuman.filter(i => i.gender === "Female")).length)/sizeHuman)*100).toFixed(1));
	const humanMale = Number(((((arraySpeciesHuman.filter(i => i.gender === "Male")).length)/sizeHuman)*100).toFixed(1));
	const humanUnknown = Number(((((arraySpeciesHuman.filter(i => i.gender === "unknown")).length)/sizeHuman)*100).toFixed(1));
	const humanGenderless = Number(((((arraySpeciesHuman.filter(i => i.gender === "Genderless")).length)/sizeHuman)*100).toFixed(1));

	//ALIEN
	const arraySpeciesAlien = array.filter(i => i.species === "Alien");
	const sizeAlien = arraySpeciesAlien.length;

	const alienFemale = Number(((((arraySpeciesAlien.filter(i => i.gender === "Female")).length)/sizeAlien)*100).toFixed(1));
	const alienMale = Number(((((arraySpeciesAlien.filter(i => i.gender === "Male")).length)/sizeAlien)*100).toFixed(1));
	const alienUnknown = Number(((((arraySpeciesAlien.filter(i => i.gender === "unknown")).length)/sizeAlien)*100).toFixed(1));
	const alienGenderless = Number(((((arraySpeciesAlien.filter(i => i.gender === "Genderless")).length)/sizeAlien)*100).toFixed(1));

	//HUMANOID
	const arraySpeciesHumanoid = array.filter(i => i.species === "Humanoid");
	const sizeHumanoid = arraySpeciesHumanoid.length;

	const humanoidFemale = Number(((((arraySpeciesHumanoid.filter(i => i.gender === "Female")).length)/sizeHumanoid)*100).toFixed(1));
	const humanoidMale = Number(((((arraySpeciesHumanoid.filter(i => i.gender === "Male")).length)/sizeHumanoid)*100).toFixed(1));
	const humanoidUnknown = Number(((((arraySpeciesHumanoid.filter(i => i.gender === "unknown")).length)/sizeHumanoid)*100).toFixed(1));
	const humanoidGenderless = Number(((((arraySpeciesHumanoid.filter(i => i.gender === "Genderless")).length)/sizeHumanoid)*100).toFixed(1));

	//SPECIES UNKNOWN
	const arraySpeciesUnknown = array.filter(i => i.species === "unknown");
	const sizeSpeciesUnknown = arraySpeciesUnknown.length;

	const speciesUnknownFemale = Number(((((arraySpeciesUnknown.filter(i => i.gender === "Female")).length)/sizeSpeciesUnknown)*100).toFixed(1));
	const speciesUnknownMale = Number(((((arraySpeciesUnknown.filter(i => i.gender === "Male")).length)/sizeSpeciesUnknown)*100).toFixed(1));
	const speciesUnknownUnknown = Number(((((arraySpeciesUnknown.filter(i => i.gender === "unknown")).length)/sizeSpeciesUnknown)*100).toFixed(1));
	const speciesUnknownGenderless = Number(((((arraySpeciesUnknown.filter(i => i.gender === "Genderless")).length)/sizeSpeciesUnknown)*100).toFixed(1));

	//POOPYBUTTHOLE
	const arrayPoopybutthole = array.filter(i => i.species === "Poopybutthole");
	const sizePoopybutthole = arrayPoopybutthole.length;

	const poopybuttholeFemale = Number(((((arrayPoopybutthole.filter(i => i.gender === "Female")).length)/sizePoopybutthole)*100).toFixed(1));
	const poopybuttholeMale = Number(((((arrayPoopybutthole.filter(i => i.gender === "Male")).length)/sizePoopybutthole)*100).toFixed(1));
	const poopybuttholeUnknown = Number(((((arrayPoopybutthole.filter(i => i.gender === "unknown")).length)/sizePoopybutthole)*100).toFixed(1));
	const poopybuttholeGenderless = Number(((((arrayPoopybutthole.filter(i => i.gender === "Genderless")).length)/sizePoopybutthole)*100).toFixed(1));

	//MYTHLOG
	const arrayMytholog = array.filter(i => i.species === "Mytholog");
	const sizeMytholog = arrayMytholog.length;

	const mythologFemale = Number(((((arrayMytholog.filter(i => i.gender === "Female")).length)/sizeMytholog)*100).toFixed(1));
	const mythologMale = Number(((((arrayMytholog.filter(i => i.gender === "Male")).length)/sizeMytholog)*100).toFixed(1));
	const mythologUnknown = Number(((((arrayMytholog.filter(i => i.gender === "unknown")).length)/sizeMytholog)*100).toFixed(1));
	const mythologGenderless = Number(((((arrayMytholog.filter(i => i.gender === "Genderless")).length)/sizeMytholog)*100).toFixed(1));

	//ANIMAL
	const arrayAnimal = array.filter(i => i.species === "Animal");
	const sizeAnimal = arrayAnimal.length;

	const animalFemale = Number(((((arrayAnimal.filter(i => i.gender === "Female")).length)/sizeAnimal)*100).toFixed(1));
	const animalMale = Number(((((arrayAnimal.filter(i => i.gender === "Male")).length)/sizeAnimal)*100).toFixed(1));
	const animalUnknown = Number(((((arrayAnimal.filter(i => i.gender === "unknown")).length)/sizeAnimal)*100).toFixed(1));
	const animalGenderless = Number(((((arrayAnimal.filter(i => i.gender === "Genderless")).length)/sizeAnimal)*100).toFixed(1));

	//VAMPIRE
	const arrayVampire = array.filter(i => i.species === "Vampire");
	const sizeVampire = arrayVampire.length;

	const vampireFemale = Number(((((arrayVampire.filter(i => i.gender === "Female")).length)/sizeVampire)*100).toFixed(1));
	const vampireMale = Number(((((arrayVampire.filter(i => i.gender === "Male")).length)/sizeVampire)*100).toFixed(1));
	const vampireUnknown = Number(((((arrayVampire.filter(i => i.gender === "unknown")).length)/sizeVampire)*100).toFixed(1));
	const vampireGenderless = Number(((((arrayVampire.filter(i => i.gender === "Genderless")).length)/sizeVampire)*100).toFixed(1));

	//ROBOT
	const arrayRobot = array.filter(i => i.species === "Robot");
	const sizeRobot = arrayRobot.length;

	const robotFemale = Number(((((arrayRobot.filter(i => i.gender === "Female")).length)/sizeRobot)*100).toFixed(1));
	const robotMale = Number(((((arrayRobot.filter(i => i.gender === "Male")).length)/sizeRobot)*100).toFixed(1));
	const robotUnknown = Number(((((arrayRobot.filter(i => i.gender === "unknown")).length)/sizeRobot)*100).toFixed(1));
	const robotGenderless = Number(((((arrayRobot.filter(i => i.gender === "Genderless")).length)/sizeRobot)*100).toFixed(1));

	//CRONENBERG
	const arrayCronenberg = array.filter(i => i.species === "Cronenberg");
	const sizeCronenberg = arrayCronenberg.length;

	const cronenbergFemale = Number(((((arrayCronenberg.filter(i => i.gender === "Female")).length)/sizeCronenberg)*100).toFixed(1));
	const cronenbergMale = Number(((((arrayCronenberg.filter(i => i.gender === "Male")).length)/sizeCronenberg)*100).toFixed(1));
	const cronenbergUnknown = Number(((((arrayCronenberg.filter(i => i.gender === "unknown")).length)/sizeCronenberg)*100).toFixed(1));
	const cronenbergGenderless = Number(((((arrayCronenberg.filter(i => i.gender === "Genderless")).length)/sizeCronenberg)*100).toFixed(1));

	//DISEASE
	const arrayDisease = array.filter(i => i.species === "Disease");
	const sizeDisease = arrayDisease.length;

	const diseaseFemale = Number(((((arrayDisease.filter(i => i.gender === "Female")).length)/sizeDisease)*100).toFixed(1));
	const diseaseMale = Number(((((arrayDisease.filter(i => i.gender === "Male")).length)/sizeDisease)*100).toFixed(1));
	const diseaseUnknown = Number(((((arrayDisease.filter(i => i.gender === "unknown")).length)/sizeDisease)*100).toFixed(1));
	const diseaseGenderless = Number(((((arrayDisease.filter(i => i.gender === "Genderless")).length)/sizeDisease)*100).toFixed(1));

	//PARASITE
	const arrayParasite = array.filter(i => i.species === "Parasite");
	const sizeParasite = arrayParasite.length;

	const parasiteFemale = Number(((((arrayParasite.filter(i => i.gender === "Female")).length)/sizeParasite)*100).toFixed(1));
	const parasiteMale = Number(((((arrayParasite.filter(i => i.gender === "Male")).length)/sizeParasite)*100).toFixed(1));
	const parasiteUnknown = Number(((((arrayParasite.filter(i => i.gender === "unknown")).length)/sizeParasite)*100).toFixed(1));
	const parasiteGenderless = Number(((((arrayParasite.filter(i => i.gender === "Genderless")).length)/sizeParasite)*100).toFixed(1));

	return {}
};

window.data = {
  searchForCharacter: searchForCharacter,
  showAllChar: showAllChar,
  searchByRadioButton: searchByRadioButton,
  charCountGender: charCountGender,
  charCountStatus: charCountStatus,
  charCountSpecies: charCountSpecies
}; 

