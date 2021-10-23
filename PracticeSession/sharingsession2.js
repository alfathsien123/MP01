var x = 3
console.log('a'.repeat(x));

var x = 1
var totalBaris = 5

do {
    console.log('*'.repeat(x));
    x = x + 1
} while (x <= totalBaris);

var baris = 3

//   *      jumlah spasi = baris        jumlah bintang = baris
//  ***     jumlah spasi = baris - 1    jumlah bintang = baris + 2
// *****    jumlah spasi = baris - 2    jumlah bintang = baris + 4

var result = ''
for (i = 0; i < baris; i++)
{
    result += ' '.repeat(baris - i)
    result += '*'.repeat((i * 2) + 1)
    result += '\n'
}
console.log(result);

// object
var orang = {nama: 'Alfath', umur: 10, alamat: 'Duri'}
console.log(orang.nama);

// function untuk re-use codingan
function printSegitiga(baris)
{
    var result = ''
    for (i = 0; i < baris; i++)
    {
        result += ' '.repeat(baris - i)
        result += '*'.repeat((i * 2) + 1)
        result += '\n'
    }
    console.log(result);
}
printSegitiga(3);
printSegitiga(6);
printSegitiga(9);
