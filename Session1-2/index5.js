// Data types
// String / text, menggunakan kutip satu/dua
var _first = "Pertama"
var $money = 'Duit'
var first, second, third
first = "Pertama"
second = "Kedua"
third = "Ketiga"

// number / angkka
// integer, bilangan bulat
var intOne = 123
var intTwo = 456
var intThree = 789

// float, bilangan desimal
var _intOne = 1.23
var _intTwo = 0.456
var _intThree = 789.2

// BooLean
// hanya memiliki nilai true dan false
var graduate = true
var sick = false

// Object
// menyimpan data lebih dari satu
var name = {firstName : "Alfath", lastName : "Sien"}
console.log(name.firstName)
console.log(name.lastName)


// Array
/* 
Menyimpan data lebih dari satu, setiap data akan 
diwakilkan oleh nomor index
*/
var tanggal = ["Senin", "Selasa", "Rabu"] // [0], [1], [2]
console.log(tanggal[1])

// Undefined
// Mewakili variabel tidak ada nilai/isi

var kosong
console.log(kosong)

// Typeof
// mencari tau tipe dari data
var test = 22
var test2 = "22"
var result = typeof(test, test2)
console.log(result)