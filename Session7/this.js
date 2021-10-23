// this keyword

var person = {
  firstName: "Alfath",
  lastName: "Sien",
  nickName: "Fath",
  greet: function (time) {
    console.log(`Good ${time}`);
  },
  intro: function (time) {
    this.greet(time);
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

person.intro("Morning");
