// Key value pair
// value : function, key : method
// value : kalau bukan function,  key : property

// Literal
const captain = {
  name: "Kuroki",
  pet: ["Kucing", "Anjing", "Kuda"],
  active: true,
  height: 170,
  play: function (game) {
    console.log(`Playing: ${game}`);
  },
};

console.log(captain);

// Access with dot . //
console.log(`\n`);

console.log(captain.name);
console.log(captain.pet);

captain.play("Dota");

// Access with bracket [] //
console.log("\n");

console.log(captain["name"]);
console.log(captain["pet"]);

captain["play"]("dota");

// changing value //
console.log("\n");

captain.height = 159;
captain.pet = "Burung";
captain.play = function (game) {
  console.log(`Let's play some: ${game}`);
};

captain.play("Dota");

// add new key
console.log("");

captain.nationality = "Germany";
captain.hi = function (sapa) {
  console.log(`Alfath ${sapa}`);
};

captain.hi("apa kabar");

// Destructure//

const { name, pet } = captain;
console.log(pet);
console.log(name);

// New //

const captain2 = new Object();
// console.log(captain2);

captain2.nationality = "Indonesia";
captain2.hi = function (sapa) {
  console.log(`Alfath ${sapa}`);
};

captain2.hi("ya?");
