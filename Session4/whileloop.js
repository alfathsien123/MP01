//LOOP
//Selama condition bernilai true makan task pada loop akan tetap dirproses

// Alur
// Alur proses
// Alur A : while dan for
// Alur B : do while

// Menampilkan angka 1-5

/*
Alur Proses While Loope

1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
2. Mengevaluasi condition (condition)
    a. condition : true, memproses task yang ada
    b. condition : false, keluar dari block loop
3. Setelah menyelesaikan task yang ada dalam block loop, memodifikasi nilai pada 
   variabel init  (modification)
4. Kembali ke langkah 2
*/


var number = 1
while (number <= 5) {
    console.log(`Number: ${number}`);
    number ++
}

console.log("");

// Membuat variabel init
var number2 = 0
// Mengevaluasi condition
while (number2 <= 10) {
    // Menampilkan informasi pada terminal
    console.log(`Number: ${number2}`);
    // Menjumlahkan 'number2' dengan 2
    number2 += 2

    // Kembali mengevaluasi condition
}

// Dijalankan setelah keluar dari loop
console.log("");


//////////////////////////
// Menampilakn nilai genap
//////////////////////////

var number3 = 2

while (number3 <= 10) 
{
   if (number3 % 2 == 0) 
   {
       console.log(`Angka ${number3} merupakan GENAP`);
   }
    
   number3++

}

//////////////////////////////////////
// Menampilakn nilai genap dan ganjil
/////////////////////////////////////
console.log("");

var number4 = 1

while (number4 <= 5) 
{
    if (number4%2 == 0) 
    {
       console.log(`Angka ${number4} merupakan GENAP`); 
    }    
    else console.log(`Angka ${number4} merupakan GANJIL`);   

    number4++
}