const searchChar = () => {
  
  
  let input = document.getElementById("char-name").value;
  let name = "";
  let species ="";
  let origin ="";
  let image = "";

  const personagem = RICKANDMORTY.results;
  //const nome = input.toLowerCase();  
  for (let i of personagem){

    if(i.name.toLowerCase() == input.toLowerCase()){
      image=document.getElementById("image").innerHTML= `<img src="${i.image}"/>`;
      name=document.getElementById("name").innerHTML=i.name;
      species=document.getElementById("species").innerHTML=i.species;
      origin=document.getElementById("origin").innerHTML=i.origin.name;

      return image,name,species,origin;
    }
  }
}
document.getElementById("btn-char").addEventListener("click", searchChar);
const personagem = RICKANDMORTY.results;

for(let opcao of personagem){

  document.getElementById("resultado").innerHTML += `${opcao.name} <img src="${opcao.image}" width="200" height="200" /></br>`

}

document.getElementById("btn-clean").addEventListener("click", searchChar);
  document.getElementById("char-name").value='';
  sessionStorage.clear();



/*window.data = {
	searchForCharacter: searchForCharacter
};*/

//
function pesquisarEspecie(){
  let resultSpecies = RICKANDMORTY.results.filter(character => character.species === "Human");

  for (let i of resultSpecies){
    document.getElementById("char-name").innerHTML=i.species;     
  }


  //console.log(resultSpecies[0]);
}
