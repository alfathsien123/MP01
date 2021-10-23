// Syntax Array

var things = ["books","pen", "clock" ]
console.log(things);
console.table(things);

var random = [23, "Michael", true, 3.14]
console.log(random);
console.table(random);

console.log('things 0 :' + things[0]);
console.log('random 0 :' + random[0]);
console.log('random 1 :' + random[1]);

console.log('\n');

things[0] = 'paper'
things[2] = 'shoes'

console.log(things);

things[5] = 'cloth'
console.log(things);
console.log('things 4 :' + things[4]);
console.table(things);

// memberitahu banyaknya index pada array
console.log(`Lenght dari array things: ${things.length}`);