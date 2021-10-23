// Pyramid triangle upside down

// 1. * * * * * * * *
// 2. s * * * * * *
// 3. s s * * * *
// 4. s s s * * *
// 5. s s s s *






var stars = ""
var rows = 5

// loop i untuk membuat baris
// loop sebanyak nilai yang disimpan pada variabel 'rows'
for (var i = rows; i >= 1 ; i--) 
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