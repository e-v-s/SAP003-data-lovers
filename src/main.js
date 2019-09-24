document.getElementById("btn-char").addEventListener("click", function() {
  searchCharacter();
  cleanInputBox();
});

//array created using the object.results
let array = RICKANDMORTY.results;

//these create options on select tag using the keys gender, species and status from the objects inside array
const genderSelect = `<option value="gender">${(Object.keys(array[0]))[5]}</option>`;
const speciesSelect = `<option value="species">${(Object.keys(array[0]))[3]}</option>`;
const statusSelect = `<option value="status">${(Object.keys(array[0]))[2]}</option>`;

document.getElementById("search-type").innerHTML = genderSelect + speciesSelect + statusSelect;

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

  document.getElementById("print-here").innerHTML += `${newArray.map(item => `<input class="checkbox" name="radio" type="radio" value="${item}">${item}</input>`)}`;
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

window.onload = function() {
  searchCharacter();
  showEverybody();
  cleanInputBox();
  openRadioButton();
  submit();
};

document.getElementById("search-type").addEventListener("change", openRadioButton);
document.getElementById("btn-search-type").addEventListener("click", submit);