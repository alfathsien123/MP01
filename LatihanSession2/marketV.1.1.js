var hApel = 10000
var hAnggur = 15000
var hJeruk = 20000

var inputApel = prompt("Masukkan Jumlah Apel")
var inputAnggur = prompt("Masukkan Jumlah Anggur")
var inputJeruk = prompt("Masukkan Jumlah Jeruk")

var totalApel = inputApel * 10000
var totalAnggur = inputAnggur * 15000
var totalJeruk = inputJeruk * 20000

var totalBelanja = totalAnggur + totalApel + totalJeruk

alert(`Detail Belanja

Apel : ${inputApel} x ${hApel} = ${totalApel}
Anggur : ${inputAnggur} x ${hAnggur} = ${totalAnggur}
Jeruk : ${inputJeruk} x ${hJeruk} =  ${totalJeruk}

Total : ${totalBelanja}`
)
