// Object for Every Data Types

// Primitive : string, number, boolean
const priString = "Hari ini Hujan";
const objString = new String("Hari ini Hujan");

console.log(priString);
console.log(objString);
console.log(priString.toUpperCase());
console.log(objString.toLowerCase());
console.log(typeof priString);
console.log(typeof objString);

const priNum = 55000;
const objNum = new Number(55000);

console.log(priNum);
console.log(objNum);
console.log(priNum.toLocaleString("id")); // ubah angka ribu ke format id (Indonesia)
console.log(objNum.toLocaleString("id"));
console.log(typeof priNum);
console.log(typeof objNum);

const priBoolean = true;
const objBoolean = new Boolean(false);

console.log(typeof priBoolean);
console.log(typeof objBoolean);

// Object :  array, object, string, number, boolean

const priArray = [1, 3, 5, 9];
const objArray = new Array([(1, 3, 5, 7)]);

console.log(typeof priArray);
console.log(typeof objArray);

const priObject = { nama: "Alfath" };
const objObject = new Object({ nama: "Alfath" });

console.log(typeof priObject);
console.log(typeof objObject);
