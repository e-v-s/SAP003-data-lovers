require("../src/data.js");

describe("searchForCharacter", () => {
  it("is a function", () => {
    expect(typeof data.searchForCharacter).toBe("function");
  });

  it("returns `example`", () => {
    expect(data.searchForCharacter(["name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", {"gender": "Male", 
    "origin": "name": "Earth (C-137)", "url": "https://rickandmortyapi.com/api/location/1",
    "location": "name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"]).toBe(`<div class="all-char">
		<p class="all-name" id="char-name-search"></p>
		<p><img class="all-image" src="image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}"/></p>
		<p class="all-gender"> Gender: "Male"</p>
		<p class="all-status"> Status: "Alive"</p>
		<p class="all-species"> Species:"Human"</p>
		<p class="all-type"> Type:""</p>
		<p class="all-origin"> Origin: "{"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"}"</p>
		<p class="all-location"> Location:{"name": "Earth (Replacement Dimension)", "url": "https://rickandmortyapi.com/api/location/20"} </p>
		</div>`);
  });
});
