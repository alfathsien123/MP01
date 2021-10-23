// Map

/*
1. callback function harus me-return suatu nilai (tipe data apapun), di mana setiap nilai yang direturn akan masuk dalam array baru yang dibuat oleh function map secara internal, bukan karena kita yang menulis kodenya
2. map akan me-return array baru yang sudah berisi nilai yang direturn oleh callback function
*/

// Multiple by two : for each
var num = [1, 2, 3];
var arrResult = [];
num.forEach((number) => {
  arrResult.push(number * 2);
});

console.log(`For each: ${arrResult}`);

// Multiple by two : map
var num = [1, 2, 3];

var mapResult = num.map((number) => {
  return number * 2;
});

console.log(`Map : ${mapResult}`);

// Man or Woman

/* Mrs. Janette */
/* Mr. Kim Shin */

var persons = [
  ["Janette", "woman"],
  ["Kim Shin", "man"],
  ["Tony", "man"],
];

var personResult = persons.map((person) => {
  var name = person[0];
  if (person[1] == "man") {
    return `Mr. ${name}`;
  } else if (person[1] == "woman") {
    return `Mrs. ${name}`;
  }
});

console.log(personResult);

// Genap Ganjil

var num = [12, 34, 55, 22, 33, 67, 89];

var numResult = num.map((number) => {
  if (number % 2 == 0) {
    return [number, "Genap"];
  } else return [number, "Ganjil"];
});

console.log(numResult);
