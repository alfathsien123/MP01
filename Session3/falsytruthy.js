// falsy value: 0, "", Null, Unidefiend, NaN
// truthy value: angka (kecuali 0, dan empty string), {} (empty object), dan [] (empty array)
var nilai = { First: "Tony" };
var result = Boolean(nilai);
console.log(`${nilai} adalah ${result}`);

var a = {};
if (a) {
  console.log(`${a} adalah : Truthy Value`);
} else console.log(`${a} adalah : Falsy Value`);
