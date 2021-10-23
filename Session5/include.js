// include : memeriksa apakah array mengandung nilai tertentu

var things = ['a', 'b', 'c', 'd']

var b = things.includes('b')

console.log(b); // true

b = things.includes('B') 
console.log(b); // false
b = things.includes(b)
console.log(b); // false


