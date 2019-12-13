const array = RICKANDMORTY.results; 

const genderSelect = `<option value="gender">${(Object.keys(array[0]))[5]}</option>`;
const speciesSelect = `<option value="species">${(Object.keys(array[0]))[3]}</option>`;
const statusSelect = `<option value="status">${(Object.keys(array[0]))[2]}</option>`;

document.getElementById("search-type").innerHTML = genderSelect + speciesSelect + statusSelect;

document.getElementById("btn-char").addEventListener("click", function() {
  searchCharacter();
  cleanInputBox();
});

const searchCharacter = () => {
  const inputChar = document.getElementById("char-value").value; 
  const dataSearchForChar = window.data.searchForCharacter(inputChar, array);
  let character = [];
  for (let i of dataSearchForChar) {
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
  document.getElementById("show-images-of-all-char").innerHTML = character;  
};
//function which creates radio buttons with the options related to the values inside each select tag (gender, status and species)
const openRadioButton = () => {
  document.getElementById("print-here").innerHTML = "";
  const selectValue = document.getElementById("search-type").value;
  const arrayMap = array.map(item => item[selectValue]);
  let newArray = arrayMap.filter((item, index) => arrayMap.indexOf(item) === index);
  document.getElementById("print-here").innerHTML += `${newArray.map(item => `<input class="checkbox" name="radio" type="radio" value="${item}">${item}</input>`).join(" ")}`;
};

const submit = (event) => {
  event.preventDefault();
  const searchType = document.getElementById("search-type").value;
  buttonValue = document.querySelector(".checkbox:checked").value;
  const arrayType = window.data.searchByRadioButton(buttonValue, array, searchType);
  let type = [];
  for (let i of arrayType) {
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
  document.getElementById("show-images-of-all-char").innerHTML = type;
  document.getElementById("form-search").reset();
};

const showEverybody = () => {  
  let imageAllChar = [];
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
  document.getElementById("show-images-of-all-char").innerHTML += imageAllChar;
};

const cleanInputBox = () => {
  document.getElementById("char-value").value = "";
};

google.charts.load("current", {"packages":["corechart"]});

const drawChartGender = () => {  
  const y = window.data.charCountGender();
  document.getElementById("dash-gender").innerHTML = `
    <div class="dashboard-gender char">
      <p class='upper-text'>São ao todo</p>
      <p class="num">${y.size}</p>
      <p>personagens, dos quais:</p>
    </div>
    <div class="dashboard char">
      <div class="gender female">
        <p class="num">${y.countGender.Female}</p>
        <p>Feminino</p>
      </div>
      <div class="gender male">
        <p class="num">${y.countGender.Male}</p>
        <p>Masculino</p>
      </div>
      <div class="gender genderless">
        <p class="num">${y.countGender.Genderless}</p>
        <p>Agênero</p>
      </div>
      <div class="gender gender-unknown">
        <p class="num">${y.countGender.unknown}</p>
        <p class="g">Gênero Desconhecido</p>
      </div>            
    </div>
    <div id="piechart-gender"></div>`;
  const dataGender = google.visualization.arrayToDataTable([
  ["Char by gender", "Gender"],
  ["Female", y.countGender.Female],
  ["Male", y.countGender.Male],
  ["Unknown", y.countGender.unknown],
  ["Genderless", y.countGender.Genderless],
]);
  const optionsGender = {"title":"Characters By Gender", "pieHole": 0.4,"width": 300, "height":300};
  const chartGender = new google.visualization.PieChart(document.getElementById("piechart-gender"));
  chartGender.draw(dataGender, optionsGender);
};

const drawChartStatus = () => {
  //STATUS
  const y = window.data.charCountStatus();
  document.getElementById("dash-status").innerHTML = `
    <div class="dashboard-status char">
      <p>Estes personagens podem ser encontrados em</p>
      <p class="num">${Object.keys(y.countStatus).length}</p>
      <p>status diferentes:</p>
    </div>
    <div class="dashboard char">
      <div class="status alive">
        <p class="num">${y.countStatus.Alive}</p>
        <p>Personagens Vivos</p>
      </div>
      <div class="status dead">
        <p class="num">${y.countStatus.Dead}</p>
        <p>Personagens Mortos</p>
      </div>
      <div class="status status-unknown">
        <p class="num">${y.countStatus.unknown}</p>
        <p>Situação desconhecida</p>
      </div>
    </div>
    <div id="piechart-status"></div>`;
  const dataStatus = google.visualization.arrayToDataTable([
    ["Char by status", "Status"],
    ["Alive", y.countStatus.Alive],
    ["Dead", y.countStatus.Dead],
    ["unknown", y.countStatus.unknown]
    ]);
  const optionsStatus = {"title": "Characters by Status", "width": 300, "height": 300, "pieHole": 0.4};
  const chartStatus = new google.visualization.PieChart(document.getElementById("piechart-status"));
  chartStatus.draw(dataStatus, optionsStatus);
};

const drawChartSpecies = () => {
  const y = window.data.charCountSpecies();
  document.getElementById("dash-species").innerHTML = `
    <div class="dashboard-species char">
      <p>A série tem um total de</p>
      <p class="num">12</p>
      <p>espécies, das quais:</p>
    </div>
    <div  class="dashboard char">
      <div class="species">
        <p class="num">${y.countSpecies.Human}</p>
        <p>Human</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Alien}</p>
        <p>Alien</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Humanoid}</p>
        <p>Humanoid</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.unknown}</p>
        <p>Unknown</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Poopybutthole}</p>
        <p>Poopybutthole</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Mytholog}</p>
        <p>Mytholog</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Animal}</p>
        <p>Animal</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Vampire}</p>
        <p>Vampire</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Robot}</p>
        <p>Robot</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Cronenberg}</p>
        <p>Cronenberg</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Disease}</p>
        <p>Disease</p>
      </div>
      <div class="species">
        <p class="num">${y.countSpecies.Parasite}</p>
        <p>Parasite</p>
      </div>
    </div>
    <div id="piechart-species">`;

  const dataSpecies = google.visualization.arrayToDataTable([
    ["Char by Species", "Species"],
    ["Human", y.countSpecies.Human],
    ["Alien", y.countSpecies.Alien],
    ["Humanoid", y.countSpecies.Humanoid],
    ["Species unknown", y.countSpecies.unknown],
    ["Poopybutthole", y.countSpecies.Poopybutthole],
    ["Mytholog", y.countSpecies.Mytholog],
    ["Animal", y.countSpecies.Animal],
    ["Vampire", y.countSpecies.Vampire],
    ["Robot", y.countSpecies.Robot],
    ["Cronenberg", y.countSpecies.Cronenberg],
    ["Disease", y.countSpecies.Disease],
    ["Parasite", y.countSpecies.Parasite]
    ]);

  const optionsSpecies = {"title": "Characters by Species", "width": 300, "height": 300};

  const chartSpecies = new google.visualization.PieChart(document.getElementById("piechart-species"));

  chartSpecies.draw(dataSpecies, optionsSpecies);
};

const selSpecies = () => {
  const arrayMap = array.map(item => item.species);
  let newArray = arrayMap.filter((item, index) => arrayMap.indexOf(item) === index);
  document.getElementById("search-gender").innerHTML += `${newArray.map(i => `<option value="${i}">${i}</option>`)}`;
};

const searchSelSpecies = () => {
  let searchType = document.getElementById("search-gender").value;
  document.getElementById("dash-sp-by-gn-perc").innerHTML = window.data.example(searchType, array);
};
  
document.getElementById("search-gender").addEventListener("change", searchSelSpecies);

const drawChartSpeciesByGender = () => {
  const y = window.data.charCountSpeciesByGender();
  document.getElementById("dash-species-by-gender").innerHTML = `
    <div id="column-chart-species-by-gender"></div>`;
  const data = google.visualization.arrayToDataTable([
    ["Specie", "Human", "Alien", "Humanoid", "Unknown", "Poopybutthole", "Mytholog", "Animal", "Vampire", "Robot", "Cronenberg", "Disease", "Parasite"],
    ["Female", y.humanFemale, y.alienFemale, y.humanoidFemale, y.speciesUnknownFemale, y.poopybuttholeFemale, y.mythologFemale, y.animalFemale, y.vampireFemale, y.robotFemale, y.cronenbergFemale, y.diseaseFemale, y.parasiteFemale],
    ["Male", y.humanMale, y.alienMale, y.humanoidMale, y.speciesUnknownMale, y.poopybuttholeMale, y.mythologMale, y.animalMale, y.vampireMale, y.robotMale, y.cronenbergMale, y.diseaseMale, y.parasiteMale],
    ["Genderless", y.humanGenderless, y.alienGenderless, y.humanoidGenderless, y.speciesUnknownGenderless, y.poopybuttholeGenderless, y.mythologGenderless, y.animalGenderless, y.vampireGenderless, y.robotGenderless, y.cronenbergGenderless, y.diseaseGenderless, y.parasiteGenderless],
    ["Unknown", y.humanUnknown, y.alienUnknown, y.humanoidUnknown, y.speciesUnknownUnknown, y.poopybuttholeUnknown, y.mythologUnknown, y.animalUnknown, y.vampireUnknown, y.robotUnknown, y.cronenbergUnknown, y.diseaseUnknown, y.parasiteUnknown]
  ]);

  const options = {
      title: "Species By Gender",
      subtitle: "Species, Gender, and Profit: 2014-2017",
      "width": 300,
      height: 300,
      legend: { position : 'top' , maxLines : 1 },   
      bar: { groupWidth: '25%' },
      isStacked: 'true'
    }  
  const chart = new google.visualization.ColumnChart(document.getElementById('column-chart-species-by-gender'));
  chart.draw(data, options);
};

google.charts.setOnLoadCallback(drawChartGender);
google.charts.setOnLoadCallback(drawChartStatus);
google.charts.setOnLoadCallback(drawChartSpecies);
google.charts.setOnLoadCallback(drawChartSpeciesByGender);

window.onload = function() {
  showEverybody();
  openRadioButton();
  selSpecies();
  searchSelSpecies();
};

document.getElementById("search-type").addEventListener("change", openRadioButton);
document.getElementById("btn-search-type").addEventListener("click", submit);