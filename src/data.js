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

	const female = (arrayGender.filter(i => i === "Female")).length;
	const male = (arrayGender.filter(i => i === "Male")).length;
	const genderless = (arrayGender.filter(i => i === "Genderless")).length;
	const genderUnknown = (arrayGender.filter(i => i === "unknown")).length;

	//female percentage
	femPerc = Math.round((female/size)*100);
	malePerc = Math.round((male/size)*100);
	gendUnkPerc = Math.round((genderUnknown/size)*100);
	genssPerc = Math.round((genderless/size)*100);

	return femPerc, malePerc,gendUnkPerc, genssPerc;
};

//Status counter
const charCountStatus = () => {

	const size = array.length;
	
	const arrayStatus = array.map(item => item.status);

	const arrayAlive = (arrayStatus.filter(i => i === "Alive")).length;
	const arrayDead = (arrayStatus.filter(i => i === "Dead")).length;
	const statusUnknown = (arrayStatus.filter(i => i === "unknown")).length;

	// console.log(size);
};

//Species counter
const charCountSpecies = () => {

	const arraySpecies = array.map(item => item.species);

	const size = array.length;

	const human = (arraySpecies.filter( i => i === "Human")).length;
	const alien = (arraySpecies.filter(i => i === "Alien")).length;
	const humanoid = (arraySpecies.filter(i => i === "Humanoid")).length;
	const speciesUnknown = (arraySpecies.filter(i => i === "unknown")).length;
	const poopybutthole = (arraySpecies.filter(i => i === "Poopybutthole")).length;
	const mytholog = (arraySpecies.filter(i => i === "Mytholog")).length;
	const animal = (arraySpecies.filter(i => i === "Animal")).length;
	const vampire = (arraySpecies.filter(i => i === "Vampire")).length;
	const robot = (arraySpecies.filter(i => i === "Robot")).length;
	const cronenberg = (arraySpecies.filter(i => i === "Cronenberg")).length;
	const disease = (arraySpecies.filter(i => i === "Disease")).length;
	const parasite = (arraySpecies.filter(i => i === "Parasite")).length;

	// const test = array.filter( i => (i.species === "Human") && (i.gender === "Male"));

	// console.log(Math.round((test.length/human)*100));

};

window.data = {
  searchForCharacter: searchForCharacter,
  showAllChar: showAllChar,
  searchByRadioButton: searchByRadioButton,
  charCountGender: charCountGender,
}; 

