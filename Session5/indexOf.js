// indexOf : mencari index dari suatu data pada array

var things = ['a', 'b', 'c', 'd']

var b = things.indexOf('b')

console.log(b); // 1

b = things.indexOf('B') 
console.log(b); // -1 karena false/tidak ada
b = things.indexOf(b)
console.log(b); // -1