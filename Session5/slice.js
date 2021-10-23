/*
array.slice(index awal, index akhir)

index akhir tidak akan dicopy
*/

var things = ['a', 'b', 'c', 'd']

console.table(things);

var aThings = things.slice(1, 3)

console.table(aThings);

/*
Method yang mengubah nilai asli:
1. push
2. pop
3. shift
4. unshift
5. splice

Method yang tidak mengubah nilai asli:
1. slice
2. include
3. indexOf

*/
