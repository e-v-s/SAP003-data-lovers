// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
//filtro para um personagem especcífico
/*function pesquisarPersonagem(){
  let result = RICKANDMORTY.results.filter(character => character.name);

  document.write("Retornou "+result[1].name+" personagens.");

}
//filtro para pesquisar por espécie
function pesquisarEspecie(){
  let resultSpecies = RICKANDMORTY.results.filter(character => character.species == "Human");

  document.write("Retotnou "+resultSpecies.length+" personagens Humanos.");
  
}*/

/*const personagem = RICKANDMORTY.results;

for(let opcao of personagem){

  const resultado = document.getElementById("resultado")

  resultado.innerHTML += `${opcao.name} <img src="${opcao.image}"/></br>`

}*/

const searchChar = () => {
  
  document.getElementById("btn-char").addEventListener("click", searchChar);
  let input = document.getElementById("char-name").value;
  let txt = "";
  let name = "";
  let species ="";
  let origin ="";
  let image = "";

  //main
  /*const personagem =RICKANDMORTY.results;
  const nome = input.toLowerCase();
  const poersonagemEncontrado = buscarPorNome(personagem, nome)

  // data
  function buscarPorNome(personagem, nome) {
    for (let i of personagem) {
      if (i.name.toLowerCase() === nome) {
        return i;
      }
    }
  }*/
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

searchChar();

const personagem = RICKANDMORTY.results;

for(let opcao of personagem){

  document.getElementById("resultado").innerHTML += `${opcao.name} <img src="${opcao.image}" width="200" height="200" /></br>`

}

window.data = {
	searchChar : searchChar
};