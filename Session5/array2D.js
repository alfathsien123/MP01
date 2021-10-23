// array 2 D : array di dalam array

var things = 
[
[
1,
2, 
3
],

[
4,
5,
6
],

[
7,
8,
10
]

];

console.log(things);
console.log(things[0])
console.log(things[1][2])

things.push(['apple', 'banana'])
console.log(`\n things.push(['apple', 'banana'])`);
console.table(things);

things.unshift(["kuda","macan"])
console.log('things.unshift(["kuda","macan"])');
console.table(things);

things.pop()
things.shift()
console.log(`things.pop()
things.shift()`);
console.table(things);

things [1] = ["a", "b", "c"]
console.log(`things [1] = ["a", "b", "c"]`);
console.table(things);

things [1][2] = "d"
console.log(`things [1][2] = "d"`);
console.table(things);