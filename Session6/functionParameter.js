// Parameter (input)

// input : parameter
// output : return

var introduction = (nama) => {
  console.log(`Halo nama saya ${nama}`);
};

introduction("Nagisa");

var fullname = (firstname, lastname) => {
  console.log(`Halo nama saya ${firstname} ${lastname}`);
};

fullname("Alfath", "Sien");
fullname("Alfath", "Muhaddat");

var additon = (number1, number2) => {
  var result = number1 + number2;
  console.log(`Hasil penjumlahan ${number1} dan ${number2} adalah ${result}`);
};

additon(5, 12);

var multiplication = (number1, number2) => {
  var result = number1 * number2;
  console.log(`Hasil perkalian ${number1} dan ${number2} adalah ${result}`);
};

multiplication(5, 12);
