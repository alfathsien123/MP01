// filter

// filter odd
var num = [1, 2, 3, 4, 5];
var numResult = num.filter((number) => {
  if (number % 2 == 1) {
    return true;
  } else return false;
});

console.log(numResult);

// filter odd simple
var filterResult = num.filter((number) => {
  return number % 2 == 1; // true or false
});

console.log(filterResult);

// filter nama

var names = ["Alfath", "Muhaddat", "Sien", "Abc Def"];
var filterNama = names.filter((nama) => {
  return nama.length > 6;
});

console.log(filterNama);

// filter umur (>30) alamat (Duri)
var bio = [
  ["Alfath", 30, "Duri"],
  ["Muhaddat", 50, "Riau"],
  ["Sien", 23, "Duri"],
  ["Abc", 28, "Def"],
];

var filterBio = (arr) => {
  return arr.filter((val) => {
    return val[1] > 29 || val[2] == "Duri";
  });
};
var hasilBio = filterBio(bio);
console.table(hasilBio);
