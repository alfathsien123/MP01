// Looping With Array : melakukan looping untuk memproses setiap data pada array
/*
Terdapat 5 kategori film:

Horror
Sci-fi
Thriller
Adventure
Animation

*/

var category = ['Horror','Sci-fi', 'Thriller', 'Adventure', 'Animation']

var info = (`Terdapat ${category.length} kategori film: \n`)

console.log(info);

for (i = 0; i < category.length; i++)
{
    console.log(category[i]);

}