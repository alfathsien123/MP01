var x = 4
var y = 3
var z = 2

var w = Math.pow( ((x+y*z)/(x*y)) , z)

console.log(w); // Soal nomor 1

console.log(Math.cbrt(8)); // Soal nomor 3

var t = 744
var tahun = Math.floor(t/360) // sisa 24 hari
var bulan = Math.floor( (t%360)/30 ) // sisa 24 hari
var minggu = Math.floor( (t%30)/7 ) // sisa 3 hari
var hari =  ((t%30)%7)


var tanggal = `${tahun} tahun, ${bulan} bulan, ${minggu} minggu, ${hari} hari`
console.log(tanggal); // Soal nomor 4

// A + B = 49
// A / B = 0.4
// (49-B) / B = 0.4
// 49-B = 0.4B
// 49 = 1.4B
// B = 35
// A = 14
var A
var B = 35
var C = 49
var D = 0.4
A = C - B

console.log(A+2);
console.log(B+2);

var c = 120 // jarak
var a = 60 // kec a
var b = 40 // kec b
var d = a + b 
var e = 9 // pukul awal
var waktu = c / d // waktu tabrak
var jam = Math.floor(e + waktu)
var menit = waktu*60%60

console.log(`${jam}:${menit}`);