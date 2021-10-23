// concat : menggabungkan data dari dua array atau lebih

var days = ["sunday", "monday", "tuesday", "wednesday"]
var fruits = ["apple", "orange", "lemon"]
var animals = ["kucing", "anjing","kelinci"]

var daysFruit = days.concat(fruits)
console.table(daysFruit);

var semua = fruits.concat(animals, days)
console.table(semua);