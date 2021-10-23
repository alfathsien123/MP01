// class
//blueprint untuk membuat object, dengan class akan mempermudah dalam membuat object

// const kuroky = {
//   name: "Kuro Salehi",
//   age: 28,
//   nationality: "Germany",
//   position: "captain",
//   team: "Nigma",
// };
const ceb = {
  name: "Sebastian Deb",
  age: 28,
  nationality: "Indonesia",
  position: "coach",
  team: "OG",
};
const puppey = {
  name: "Clement Ivanov",
  age: 30,
  nationality: "England",
  position: "captain",
  team: "Team Secret",
};

// syntax
class player {
  constructor(name, age, nationality, position, team) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.position = position;
    this.team = team;
  }
  intro() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const dendi = new player("Daniel Ishutin", 30, "captain", "BB");
const kuroky = new player("Kuro Salehi", 28, "captain", "Nigma");

dendi.intro();
kuroky.intro();
