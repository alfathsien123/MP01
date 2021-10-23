// String Properties and Methods

// Jumlah karakter
var x = "Hello world!"
console.log(x.length); // 12

// mencari index kata dari sebuah string
// index dimual dari 0
var resultOne = x.indexOf("w") // w dan W berbeda
console.log(resultOne);
var resultTwo = x.indexOf("ello") // hanya huruf e
console.log(resultTwo);

// copy text mulai dari index, sebanyak berapa karakter
var resultThree = x.substr(5, 7) // index ke 5 sebanyak 7 karakter
console.log(resultThree);

// meng-copy sebagian text
// mengambil index a sampai index b-1
var resultFour = x.slice(0, 3) // 0,1,2
console.log(resultFour); 

// memecahkan string menjadi beberapa bagian berpotongan dengan karakter tertentu
var pecah = x.split('')
console.log(pecah);

var pecah1 = x.split(' ')
console.log(pecah1);

var pecah2 = x.split('l')
console.log(pecah2);

// huruf kapital dan kecil
var y = "hello"
var z = "WORLD"

var upper = y.toUpperCase()
var lower = z.toLowerCase()

console.log(upper);
console.log(lower);

// meriplace huruf dengan huruf lain
var ganti = x.replace('l' , 'n') // ubah l yang ketemu pertama ke n
var ganti1 = x.replace(/l/g , 'n') // ubah semua l, g = global
console.log(ganti);
console.log(ganti1);

// Boolean (True, false)
console.log(x.includes('World'));
console.log(x.includes('world'));
console.log(x.includes(' '));
console.log(x.includes('ello'));