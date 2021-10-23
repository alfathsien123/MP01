// variable scope

/* variable scope : cakupan wilayah yang dimiliki oleh variabel
   global scope : dapat diakses dari mana pun
   local scope : memiliki ruang terbatas yang dapat diakses (function scope dan block scope)
*/

/* 
    Var

    1. function scope : saat dibuat dalam function, maka hanya dapat diakses dari dalam function itu saja
*/

console.log(`\n`);

var fnScope = () => {
  var name1 = "Shaun";
  console.log(`fnScope : ${name1}`);
};

fnScope();
// console.log(name1); // tidak muncul karena variabel dalam function fnScope

if (true) {
  var name2 = "Alfah";
  console.log(`Dalam if : ${name2}`);
}

console.log(`Luar if: ${name2}`);

while (true) {
  var name3 = "Sien";
  console.log(`Dalam while : ${name3}`);
  break;
}

console.log(`Luar while : ${name3}`);

/* 
    Let

    1. function scope : saat dibuat dalam function, maka hanya dapat diakses dari dalam function itu saja
    2. block scope : saat dibuat di dalam kurung kurawal (if, while, for, switch, do while)

    Note: 
    -tidak dapat melakukan deklarasi ulang pada scope yang sama
*/

console.log(`\n`);

let fnScopeLet = () => {
  let color1 = "Red";
  console.log(`fnScopeLet : ${color1}`);
};

fnScopeLet();
// console.log(`Luar fnScopeLet : ${color1}`); // tidak muncul karena variabel dalam function fnScopeLet

if (true) {
  let color2 = "Green";
  console.log(`Dalam if : ${color2}`);
}

// console.log(`Luar if: ${color2}`); // tidak dapat terbaca

while (true) {
  let color3 = "Blue";
  console.log(`Dalam while : ${color3}`);
  break;
}

// console.log(`Luar while : ${color3}`); // tidak dapat terbaca

let day = "Minggu";
// let day = "Sunday"; // tidak dapat dipakai karena sudah dideclare

/* 
    CONST

    1. function scope : saat dibuat dalam function, maka hanya dapat diakses dari dalam function itu saja
    2. block scope : saat dibuat di dalam kurung kurawal (if, while, for, switch, do while)

    Note: 
    -tidak dapat melakukan deklarasi ulang pada scope yang sama
    -nilai tidak dapat diubah
*/

const PI = 3.14;
// PI = 3.15;  // tidak bisa karena sudah tetap
