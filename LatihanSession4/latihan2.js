// Segitiga piramid

// s = spasi

// 1. s s s s *
// 2. s s s * * *
// 3. s s * * * *
// 4. s * * * * * *
// 5. * * * * * * * *

// rows : 5
// posisi baris (i) : 1 2 3 4 5
// jumlah spasi (j) : 4 3 2 1  (rows - i)
// jumlah bintang (k) : 1 3 5 7 9

// Rows : 5
// (i) from  (*) ==> (i - 1) * 2 + 1
//  1   0 1 0  1
//  2   1 1 1  3
//  3   2 1 2  5
//  4   3 1 3  7
//  5   4 1 4  9


var stars = ""
var rows = 5

// loop i untuk membuat baris
// loop sebanyak nilai yang disimpan pada variabel 'rows'
for (var i = 1; i <= rows ; i++) 
{
    // loop j untuk menambahkan spasi setiap baris
        for (var j = (rows-1); j >= i ; j--)
    {
        stars += "   "
    } 

    // loop k untuk menambahkan * setiap baris
    for (var k = 1; k <= (i - 1) * 2 + 1 ; k++)
    {
        stars += " * "
    }

    // menambahkan new line
    stars += "\n"

}


// menampilkan hasil
console.log(stars);