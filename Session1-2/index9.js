// Random dari 0 - 0.99
var ran = Math.random();
console.log(ran);
ran = ran * 10; // 0 - 9.99
console.log(ran);
ran = Math.round(ran); // ran jadi bulat
console.log(ran);

console.log("  ");

var ran1 = Math.ceil(Math.random() * 10); // 0 - 9.99
console.log(ran1);

var ran2 = Math.random() * 10; // 0 - 9.99
ran2 = Math.floor(ran2); // 0 - 9
ran2 = ran2 + 1; // 1 - 10
console.log(ran2);
