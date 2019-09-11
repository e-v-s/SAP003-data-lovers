// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
//filtro para um personagem especcífico
function pesquisarPersonagem(){
  let result = RICKANDMORTY.results.filter(character => character.name == "Rick Sanchez");

  document.write("Retornou "+result[0].name+" personagens.");

}
//filtro para pesquisar por espécie
function pesquisarEspecie(){
  let resultSpecies = RICKANDMORTY.results.filter(character => character.species == "Human");

  document.write("Retotnou "+resultSpecies.length+" personagens Humanos.");
  
} 

