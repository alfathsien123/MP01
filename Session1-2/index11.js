// String atau text
"Hai";
"Halo";
"123";
"123";
"true";
console.log(typeof "123");

console.log("");

// tunggu aku ke sana
var wait = "tunggu aku ke sana";
console.log(wait);

console.log("");

// I am 'okay'
var text = 'I am "Okay"';
console.log(text);

console.log("");

// I'm 'okay'
var text1 = 'I\'m "Okay"';
console.log(text1);

console.log("");

// Paragraf / enter baru
console.log("Hello \n Guys!");
/*
Hello
 Guys!
*/

console.log("");

// Tab / jarak
console.log("Hello \t Guys!");
/*
Hello   Guys!
*/

console.log("");

//Concatinate String
var firsName = "Alfath";
var lastName = "Sien";
var fullName = firsName + lastName;
console.log(fullName); // Alfathsien

console.log("");

// Max Verstappen
var fullName2 = firsName + ", " + lastName;
console.log(fullName2);

console.log("");

// Concatinate with number
// hanya untuk +
var a = 123;
var b = "8";
console.log(a + b); // 123 + "8" = "1238"
console.log(a * b); // 123 * "8" = 984

console.log("");

// Backtick = ` (di bawah Esc)

var intro = `Hello my name is ${firsName} ${lastName}`;
console.log(intro);
