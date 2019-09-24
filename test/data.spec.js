require("../src/data.js");

describe("searchForCharacter", () => {
  it("is a function", () => {
    expect(typeof data.searchForCharacter).toBe("function");
  });

  it("returns `searchForCharacter`", () => {
    expect(data.searchForCharacter("evil summer", [{"name": "Evil Summer Clone", "status": "Dead", "species": "Human", "type": "Clone", "gender": "Female", "origin": {"name": "unknown"}, "location": {"name": "Earth (C-137)"}, "image": "https://placekitten.com/300/300"}, {"name": "Trandor", "status": "Alive", "species": "Alien", "type": "Krootabulan", "gender": "Male", "origin": {"name": "Krootabulon"}, "location": {"name": "Earth (Replacement Dimension)"}, "image": "https://placekitten.com/300/300"}])).toEqual(`<div class="all-char">
		<p class="all-name" id="char-name-search">Evil Summer Clone</p>
		<p><img class="all-image" src="https://placekitten.com/300/300"/></p>
		<p class="all-gender"> Gender: Female</p>
		<p class="all-status"> Status: Dead</p>
		<p class="all-species"> Species: Human</p>
		<p class="all-type"> Type: Clone</p>
		<p class="all-origin"> Origin: unknown</p>
		<p class="all-location"> Location: Earth (C-137) </p>
		</div>`);
  });
});

describe("searchByRadioButton", () => {
  it("is a function", () => {
    expect(typeof data.searchByRadioButton).toBe("function");
  });

  it("returns `searchByRadioButton`", () => {
    expect(data.searchByRadioButton("Human", [{"name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": {"name": "Earth (C-137)"}, "location": {"name": "Earth (Replacement Dimension)"}, "image": "https://placekitten.com/300/300"}, {"name": "Duck With Muscles", "status": "Dead", "species": "Parasite", "type": "Alien", "gender": "Male", "origin": {"name": "unknown"}, "location": {"name": "Earth (Replacement Dimension)"}, "image": "https://placekitten.com/300/300"}, {"name": "Tuberculosis", "status": "Dead", "species": "Disease", "type": "", "gender": "unknown", "origin": {"name": "Anatomy Park"}, "location": {"name": "Anatomy Park"}, "image": "https://placekitten.com/300/300"}], "species")).toEqual(`<div class="all-char">
				<p class="all-name" id="char-name-search">Rick Sanchez</p>
				<p><img class="all-image" src="https://placekitten.com/300/300"/></p>
				<p class="all-gender"> Gender: Male</p>
				<p class="all-status"> Status: Alive</p>
				<p class="all-species"> Species: Human</p>
				<p class="all-type"> Type: </p>
				<p class="all-origin"> Origin: Earth (C-137)</p>
				<p class="all-location"> Location: Earth (Replacement Dimension) </p>
				</div>`);	
  });
});

describe("showAllChar", () => {
  it("is a function", () => {
    expect(typeof data.showAllChar).toBe("function");
  });

  it("returns `showAllChar`", () => {
    expect(data.showAllChar([{"name": "Rick Sanchez", "status": "Alive", "species": "Human", "type": "", "gender": "Male", "origin": {"name": "Earth (C-137)"}, "location": {"name": "Earth (Replacement Dimension)"}, "image": "https://placekitten.com/300/300"}])).toEqual(`<div class="all-char">
		<p class="all-name" id="char-name-search">Rick Sanchez</p>
		<p><img class="all-image" src="https://placekitten.com/300/300"/></p>
		<p class="all-gender"> Gender: Male</p>
		<p class="all-status"> Status: Alive</p>
		<p class="all-species"> Species: Human</p>
		<p class="all-type"> Type: </p>
		<p class="all-origin"> Origin: Earth (C-137)</p>
		<p class="all-location"> Location: Earth (Replacement Dimension) </p>
		</div>`);
  });
});
