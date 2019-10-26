const searchForCharacter = (inputChar, array) => {
	
  let arrayResult = [];

  for (let i of array) {
    if (i.name.toLowerCase().includes(inputChar.toLowerCase())) {
      arrayResult.push(i);
    }
  }
  return arrayResult;
};

const searchByRadioButton = (buttonValue, array, searchType) => {
	

  const statusResult = array.filter(i => i[searchType] === buttonValue);    
  	
  return statusResult;
};

const charCountGender = () => {

	const size = array.length;

	const arrayGender = array.map(item => item.gender);

	const countGender = arrayGender.reduce((count, word) => {
		count[word] = count[word] ? count[word] + 1 : 1
		return count;
	}, {});

	return {size, countGender};
};

const charCountStatus = () => {

	const size = array.length;

	const arrayStatus = array.map(item => item.status);

	const countStatus = arrayStatus.reduce((count, word) => {
		count[word] = count[word] ? count[word] +1 : 1
		return count;
	}, {});

	return {size, countStatus};
};

//Species counter
const charCountSpecies = () => {

	const arraySpecies = array.map(item => item.species);

	const size = array.length;

	const countSpecies = arraySpecies.reduce((count, word) => {
		count[word] = count[word] ? count[word] + 1 : 1
		return count;
	}, {});

	return {size, countSpecies};	
};

const charCountSpeciesByGender = () => {
	
	//HUMAN
	const arraySpeciesHuman = array.map(i => i.species);

	console.log(arraySpeciesHuman.reduce((count, word) => {
		count[word] = count[word] ? count[word] + 1 : 1
		return count
	}, {}));

	console.log(arraySpeciesHuman)



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
  searchForCharacter,
  searchByRadioButton,
  charCountGender,
  charCountStatus,
  charCountSpecies,
  charCountSpeciesByGender,
  example,
}; 