//array created using the object.results
const array = RICKANDMORTY.results; 

//these create options on select tag using the keys gender, species and status from the objects inside array
const genderSelect = `<option value="gender">${(Object.keys(array[0]))[5]}</option>`;
const speciesSelect = `<option value="species">${(Object.keys(array[0]))[3]}</option>`;
const statusSelect = `<option value="status">${(Object.keys(array[0]))[2]}</option>`;

document.getElementById("search-type").innerHTML = genderSelect + speciesSelect + statusSelect;

document.getElementById("btn-char").addEventListener("click", function() {
  searchCharacter();
  cleanInputBox();
});
//Function used in searchForCharacter, used to search by name
const searchCharacter = () => {
  const inputChar = document.getElementById("char-value").value;
 
  document.getElementById("show-images-of-all-char").innerHTML = window.data.searchForCharacter(inputChar, array);  
};
//function which creates radio buttons with the options related to the values inside each select tag (gender, status and species)
const openRadioButton = () => {
  document.getElementById("print-here").innerHTML = "";

  const selectValue = document.getElementById("search-type").value;

  const arrayMap = array.map(item => item[selectValue]);

  let newArray = arrayMap.filter((item, index) => arrayMap.indexOf(item) === index);

  document.getElementById("print-here").innerHTML += `${newArray.map(item => `<input class="checkbox" name="radio" type="radio" value="${item}">${item}</input>`).join(" ")}`;
};

//funtion which submit the values from the checkboxes created above to the searchRadioButton function
const submit = () => {
  event.preventDefault();

  //select tag value (gender, species or status)
  const searchType = document.getElementById("search-type").value;

  //value from the radio button selected
  buttonValue = document.querySelector(".checkbox:checked").value;

  document.getElementById("show-images-of-all-char").innerHTML = window.data.searchByRadioButton(buttonValue, array, searchType);

  //reseting the form after clicking search button
  document.getElementById("form-search").reset();
};

//function to show all characters at homepage by default
const showEverybody = () => {
  let showAllChar = window.data.showAllChar(array);

  document.getElementById("show-images-of-all-char").innerHTML = imageAllChar;
};

//function to clean input box
const cleanInputBox = () => {
  document.getElementById("char-value").value = "";
};

google.charts.load("current", {"packages":["corechart"]});
google.charts.load("current", {"packages":["bar"]});

// Draw the chart and set the chart values
function drawChartGender() {
  
  const y = window.data.charCountGender();

  //pizza chart to show all genders
  const dataGender = google.visualization.arrayToDataTable([
  ["Char by gender", "Gender"],
  ["Female", y.female],
  ["Male", y.male],
  ["Unknown", y.genderUnknown],
  ["Genderless", y.genderless],
]);

  // Optional; add a title and set the width and height of the chart
  const optionsGender = {"title":"Characters By Gender", "pieHole": 0.4,"width":400, "height":300};

  // Display the chart inside the <div> element with id="piechart"
  const chartGender = new google.visualization.PieChart(document.getElementById("piechart-gender"));

  chartGender.draw(dataGender, optionsGender);
};

const drawChartStatus = () => {
  //STATUS

  const y = window.data.charCountStatus();

  const dataStatus = google.visualization.arrayToDataTable([
    ["Char by status", "Status"],
    ["Alive", y.alive],
    ["Dead", y.dead],
    ["unknown", y.statusUnknown]
    ]);

  const optionsStatus = {"title": "Characters by Status", "width": 400, "height": 300, "pieHole": 0.4};

  const chartStatus = new google.visualization.PieChart(document.getElementById("piechart-status"));

  chartStatus.draw(dataStatus, optionsStatus);
};

const drawChartSpecies = () => {

  const y = window.data.charCountSpecies();

  const dataSpecies = google.visualization.arrayToDataTable([
    ["Char by Species", "Species"],
    ["Human", y.human],
    ["Alien", y.alien],
    ["Humanoid", y.humanoid],
    ["Species unknown", y.speciesUnknown],
    ["Poopybutthole", y.poopybutthole],
    ["Mytholog", y.mytholog],
    ["Animal", y.animal],
    ["Vampire", y.vampire],
    ["Robot", y.robot],
    ["Cronenberg", y.cronenberg],
    ["Disease", y.disease],
    ["Parasite", y.parasite]
    ]);

  const optionsSpecies = {"title": "Characters by Species", "width": 600, "height": 500};

  const chartSpecies = new google.visualization.PieChart(document.getElementById("piechart-species"));

  chartSpecies.draw(dataSpecies, optionsSpecies);
};

const drawChartSpeciesByGender = () => {

  const y = window.data.charCountSpeciesByGender();

  const data = google.visualization.arrayToDataTable([
          ["Gender", "Female", "Male", "Genderless", "Unknown", "Female", "Male", "Genderless", "Unknown", "Female", "Male", "Genderless", "Unknown"],
          ["Female", y.humanFemale, y.alienFemale, y.humanoidFemale, y.speciesUnknownFemale, y.poopybuttholeFemale, y.mythologFemale, y.animalFemale, y.vampireFemale, y.robotFemale, y.cronenbergFemale, y.diseaseFemale, y.parasiteFemale],      
          ["Male", y.humanMale, y.alienMale, y.humanoidMale, y.speciesUnknownMale, y.poopybuttholeMale, y.mythologMale, y.animalMale, y.vampireMale, y.robotMale, y.cronenbergMale, y.diseaseMale,  y.parasiteMale],           
          ["Genderless", y.humanGenderless, y.humanoidGenderless, y.humanoidUnknown, y.alienGenderless, y.speciesUnknownGenderless, y.poopybuttholeGenderless, y.mythologGenderless, y.animalGenderless, y.vampireGenderless, y.robotGenderless, y.cronenbergGenderless, y.diseaseGenderless, y.parasiteGenderless],
          ["Unknown", y.humanUnknown, y.alienUnknown, y.speciesUnknownUnknown, y.poopybuttholeUnknown, y.mythologUnknown, y.animalUnknown, y.vampireUnknown, y.robotUnknown, y.cronenbergUnknown, y.diseaseUnknown, y.parasiteUnknown],
        ]);

        const options = {
          chart: {
            title: "Species By Gender",
            subtitle: "Species, Gender, and Profit: 2014-2017", "width": 700, "height":700
          }
        };

        const chart = new google.charts.Bar(document.getElementById('column-chart-species-by-gender'));

        chart.draw(data, options);
};

google.charts.setOnLoadCallback(drawChartGender);
google.charts.setOnLoadCallback(drawChartStatus);
google.charts.setOnLoadCallback(drawChartSpecies);
// google.charts.setOnLoadCallback(drawChartSpeciesByGender);

window.onload = function() {
  showEverybody();
  openRadioButton();
};

document.getElementById("search-type").addEventListener("change", openRadioButton);
document.getElementById("btn-search-type").addEventListener("click", submit);