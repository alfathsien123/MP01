var angka = parseInt(prompt("Masukkan angka"))
var state

if (angka%2 == 0) {
    state = "GENAP"
}

else  state = "Ganjil"

var info = `Nilai ${angka} merupakan angka ${state}`
alert(info)
console.log(info);
