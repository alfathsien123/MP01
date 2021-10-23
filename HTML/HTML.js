// Promt : menerima input user
// Alert : menampilkan pesan
// tekan '!' ketika baru memulai index.html
// klik scr, pilih yang bawah, tekn ./ (artinya folder yang sama)
// klik logo yang ada 4 persegi di sebelah kiri dan ketil live server
// klik kanan file index.html lalu pilih Open with Live Server
var namaLengkap = prompt("Nama Lengkap")
var hobby = prompt("Hobi")
var alamat = prompt("Alamat Lengkap")

var word = `Hello, my full name is ${namaLengkap} \n My hobby is ${hobby} \n ${alamat}`

// console.log(namaLengkap);
// console.log(hobby);
// console.log(alamat);
console.log(word);
alert(word)