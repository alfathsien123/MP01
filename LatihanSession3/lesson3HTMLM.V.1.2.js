// Indenx Massa Badan (IBM)
var apelPrice = 10000
var anggurPrice = 15000
var jerukPrice = 20000

var apelStock = 5
var anggurStock = 7
var jerukStock = 8

var apelQty = parseInt(prompt(`Masukkan jumlah qty Apel`))
if (apelQty > apelStock) {alert(`Jumlah qty Apel melebihi stok, pesanan akan terisi sesuai jumlah stok: ${apelStock}`); apelQty = apelStock}

var anggurQty = parseInt(prompt(`Masukkan jumlah qty Anggur`))
if (anggurQty > anggurStock) {alert(`Jumlah qty Anggur melebihi stok, pesanan akan terisi sesuai jumlah stok: ${anggurStock}`); anggurQty = anggurStock}

var jerukQty = parseInt(prompt(`Masukkan jumlah qty Jeruk`))
if (jerukQty > jerukStock) {alert(`Jumlah qty Jeruk melebihi stok, pesanan akan terisi sesuai jumlah stok: ${jerukStock}`); jerukQty = jerukStock}

var apelTotal = apelQty * apelPrice
var anggurTotal = anggurQty * anggurPrice
var jerukTotal = jerukQty * jerukPrice
var total = anggurTotal + jerukTotal + apelTotal

var info = 
`
Detail belanja:

Apel: ${apelQty} * ${apelPrice} = ${apelTotal}
Anggur: ${anggurQty} * ${anggurPrice} = ${anggurTotal}
Jeruk: ${jerukQty} * ${jerukPrice} = ${jerukTotal}

Total: ${total}
`
var money = parseInt(prompt(info))
var margin = Math.abs(money - total)

var finalPrice = 
(
`
Final Price: ${total}
Uang: ${money}
Sisa: ${margin}
`
)

if (money < total) {alert(`Transaksi dibatalkan, uang anda kurang: ${margin}`)}
else if (money > total) {alert(`Terima kasih, uang kembalian anda : ${margin}`)}
else alert(`Terima kasih`)